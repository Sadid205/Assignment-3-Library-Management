"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowZODSchema = void 0;
const zod_1 = require("zod");
exports.borrowZODSchema = zod_1.z.object({
    book: zod_1.z
        .string({
        required_error: "Book is required",
        invalid_type_error: "Book must be a valid ObjectId",
    })
        .length(24, { message: "Book must be a valid 24-charecter ObjectId" }),
    quantity: zod_1.z
        .number({ required_error: "quantity is required." })
        .positive({ message: "quantity must be an integer" }),
    dueDate: zod_1.z.preprocess((arg) => new Date(arg), zod_1.z.date({
        required_error: "dueDate is required",
        invalid_type_error: "dueDate must be a valid date",
    })),
});
