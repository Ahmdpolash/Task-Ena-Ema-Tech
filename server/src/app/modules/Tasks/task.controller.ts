import { Request, Response } from "express";
import { taskServices } from "./task.services";

const createTasks = async (req: Request, res: Response) => {
  const result = await taskServices.createTaskIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Task created successfully",
    data: result,
  });
};

const getTasks = async (req: Request, res: Response) => {
  const result = await taskServices.getTasksFromDB();

  res.status(200).json({
    success: true,
    message: "Task retrived successfully",
    data: result,
  });
};

export const taskControllers = { createTasks, getTasks };
