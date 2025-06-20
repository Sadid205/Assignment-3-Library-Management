import { Router, Request, Response, NextFunction } from "express";
import { borrowZODSchema } from "../schemas/borrow.schema";
import { Book } from "../models/book.models";
import { IBook } from "../interfaces/Ibook.interface";
import { checkAvailableBooks } from "../utils/checkAvailableBooks";
import { Borrow } from "../models/borrow.model";

const borrowRouter = Router();

borrowRouter.post(
  "/borrow",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedBody = borrowZODSchema.safeParse(req.body);
      if (!parsedBody.success) {
        return res.status(400).json({
          success: false,
          error: parsedBody.error.errors,
        });
      }
      const { book: bookId, quantity, dueDate } = parsedBody.data;
      const bookData: IBook | null = await Book.findById(bookId);
      checkAvailableBooks(bookData, quantity, res);
      const borrow = await Borrow.create({ ...parsedBody.data });
      const borrowedBook = await Book.findByIdAndUpdate(
        bookId,
        {
          copies: bookData && bookData.copies - quantity,
        },
        { new: true }
      );

      if (borrowedBook?.copies === 0) {
        await Book.checkAvailablity(bookId);
      }
      return res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data: borrow,
      });
    } catch (error) {
      console.log(error);
    }
  }
);
borrowRouter.get(
  "/borrow",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const books: {
        book: {
          title: string;
          isbn: string;
        };
        totalQuantity: number;
      }[] = await Borrow.aggregate([
        {
          $group: {
            _id: "$book",
            totalQuantity: { $sum: 1 },
          },
        },
        {
          $lookup: {
            from: "books",
            localField: "_id",
            foreignField: "_id",
            as: "bookList",
          },
        },
        {
          $unwind: "$bookList",
        },
        {
          $project: {
            _id: 0,
            book: {
              title: "$bookList.title",
              isbn: "$bookList.isbn",
            },
            totalQuantity: 1,
          },
        },
      ]);
      return res.status(200).json({
        success: true,
        message: "Borrowed books summary retrieved successfully",
        data: books,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default borrowRouter;
