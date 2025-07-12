import { z } from "zod";

const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

export const borrowZODSchema = z.object({
  book: z
    .string({
      required_error: "Book is required",
      invalid_type_error: "Book must be a valid ObjectId",
    })
    .length(24, { message: "Book must be a valid 24-charecter ObjectId" }),
  quantity: z
    .number({ required_error: "quantity is required." })
    .positive({ message: "quantity must be greater than 0" }),
  dueDate: z.preprocess(
    (arg) => new Date(arg as string),
    z
      .date({
        required_error: "dueDate is required",
        invalid_type_error: "dueDate must be a valid date",
      })
      .min(tomorrow, { message: "dueDate must be after today" })
  ),
});
