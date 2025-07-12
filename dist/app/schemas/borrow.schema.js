"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowZODSchema = void 0;
const zod_1 = require("zod");
const tomorrow = new Date();
tomorrow.setHours(0, 0, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);
exports.borrowZODSchema = zod_1.z.object({
    book: zod_1.z
        .string({
        required_error: "Book is required",
        invalid_type_error: "Book must be a valid ObjectId",
    })
        .length(24, { message: "Book must be a valid 24-charecter ObjectId" }),
    quantity: zod_1.z
        .number({
        required_error: "Quantity is required.",
        invalid_type_error: "Quantity must be number",
    })
        .positive({ message: "Quantity must be greater than 0" }),
    dueDate: zod_1.z.preprocess((arg) => new Date(arg), zod_1.z
        .date({
        required_error: "Due Date is required",
        invalid_type_error: "Due Date must be a valid date",
    })
        .min(tomorrow, { message: "Due Date must be after today" })),
});
