import { z } from "zod";

export const bookZodSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(3, { message: "Please entire a title at least 3 charecters" })
    .max(255, "Please keep the title under 255 charecters"),
  author: z
    .string({ required_error: "Author is required" })
    .min(3, "Please entire an author at least 3 charecters")
    .max(255, "Please keep the author under 255 charecters"),
  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    { required_error: "Genre is required" }
  ),
  isbn: z.string({ required_error: "ISBN number is required" }),
  description: z.string().optional(),
  copies: z
    .number({ required_error: "Copies number is required" })
    .positive({ message: "Copies number is required" }),
  available: z.boolean().default(false),
});

export const bookUpdateZodSchema = bookZodSchema.partial();
