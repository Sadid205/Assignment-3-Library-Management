"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrow_controller_1 = require("../controller/borrow.controller");
const borrowRouter = (0, express_1.Router)();
borrowRouter.get("/borrow", borrow_controller_1.borrow);
borrowRouter.post("/borrow", borrow_controller_1.getBorrows);
exports.default = borrowRouter;
