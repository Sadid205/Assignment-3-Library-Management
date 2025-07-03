"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookUpdateZodSchema = exports.bookZodSchema = void 0;
const zod_1 = require("zod");
exports.bookZodSchema = zod_1.z.object({
    title: zod_1.z
        .string({ required_error: "Title is required" })
        .min(3, { message: "Please entire a title at least 3 charecters" })
        .max(255, "Please keep the title under 255 charecters"),
    author: zod_1.z
        .string({ required_error: "Author is required" })
        .min(3, "Please entire an author at least 3 charecters")
        .max(255, "Please keep the author under 255 charecters"),
    genre: zod_1.z.enum(["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"], { required_error: "Genre is required" }),
    isbn: zod_1.z.string({ required_error: "ISBN number is required" }),
    description: zod_1.z.string().optional(),
    copies: zod_1.z
        .number({ required_error: "Copies number is required" })
        .min(0, { message: "Copies number must be 0 or greater" }),
    available: zod_1.z.boolean().default(false),
});
exports.bookUpdateZodSchema = exports.bookZodSchema.partial();
