import { Response } from "express";
import { IBook } from "../interfaces/Ibook.interface";

export const checkAvailableBooks = (
  bookData: IBook | null,
  quantity: number,
  res: Response
): Response | undefined => {
  if (bookData === null) {
    return res.status(400).json({ success: false, message: "Not found" });
  }
  if (bookData && bookData.copies < quantity) {
    return res
      .status(400)
      .json({ success: false, message: "Insufficient amount" });
  }
};
