import express, { Application, Request, Response } from "express";
import bookRouter from "./app/controller/book.controller";
import borrowRouter from "./app/controller/borrow.controller";

const app: Application = express();
app.use(express.json());
app.use("/api", bookRouter);
app.use("/api", borrowRouter);

app.get("/", (_req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "UP", message: "Welcome to library management app" });
});

export default app;
