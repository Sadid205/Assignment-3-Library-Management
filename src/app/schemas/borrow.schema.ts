import { z } from "zod";

export const borrowZODSchema = z.object({
  book: z
    .string({
      required_error: "Book is required",
      invalid_type_error: "Book must be a valid ObjectId",
    })
    .length(24, { message: "Book must be a valid 24-charecter ObjectId" }),
  quantity: z
    .number({ required_error: "quantity is required." })
    .positive({ message: "quantity must be an integer" }),
  dueDate: z.preprocess(
    (arg) => new Date(arg as string),
    z.date({
      required_error: "dueDate is required",
      invalid_type_error: "dueDate must be a valid date",
    })
  ),
});
