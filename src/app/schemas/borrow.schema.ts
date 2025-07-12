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
    .number({
      required_error: "Quantity is required.",
      invalid_type_error: "Quantity must be number",
    })
    .positive({ message: "Quantity must be greater than 0" }),
  dueDate: z.preprocess(
    (arg) => new Date(arg as string),
    z
      .date({
        required_error: "Due Date is required",
        invalid_type_error: "Due Date must be a valid date",
      })
      .min(tomorrow, { message: "Due Date must be after today" })
  ),
});
