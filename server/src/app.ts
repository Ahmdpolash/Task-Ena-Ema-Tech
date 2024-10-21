import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import { taskRouter } from "./app/modules/Tasks/task.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

//routes
app.use("/api", taskRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("task management project");
});

//middleware
app.use(globalErrorHandler);

export default app;
