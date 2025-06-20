"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAvailableBooks = void 0;
const checkAvailableBooks = (bookData, quantity, res) => {
    if (bookData === null) {
        return res.status(400).json({ success: false, message: "Not found" });
    }
    if (bookData && bookData.copies < quantity) {
        return res
            .status(400)
            .json({ success: false, message: "Insufficient amount" });
    }
};
exports.checkAvailableBooks = checkAvailableBooks;
