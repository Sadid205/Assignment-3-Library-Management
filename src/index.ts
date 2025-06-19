import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res
    .json(200)
    .send({ status: "UP", message: "Welcome to library management app" });
});

export default app;
