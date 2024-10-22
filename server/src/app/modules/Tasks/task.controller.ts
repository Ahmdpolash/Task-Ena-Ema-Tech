import { Request, Response } from "express";
import { taskServices } from "./task.services";

//? create task
const createTasks = async (req: Request, res: Response) => {
  const result = await taskServices.createTaskIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Task created successfully",
    data: result,
  });
};

//get all tasks
const getTasks = async (req: Request, res: Response) => {
  const result = await taskServices.getTasksFromDB(req.query);

  res.status(200).json({
    success: true,
    message: "Task retrived successfully",
    data: result,
  });
};

// get single task

const getSingleTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await taskServices.getSignleTasksFromDB(id);

  res.status(200).json({
    success: true,
    message: "Single Task retrived successfully",
    data: result,
  });
};

// delete task
const deleteTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await taskServices.deleteTasksFromDB(id);

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: result,
  });
};

//update task
const updateTasks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await taskServices.updateTasksIntoDB(id, req.body);

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: result,
  });
};

//change status

const updateTaskCompletion = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await taskServices.updateTaskCompletionIntoDB(id);

    res.status(200).json({
      success: true,
      message: "Task status  updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const taskControllers = {
  createTasks,
  getTasks,
  deleteTasks,
  updateTasks,
  getSingleTasks,
  updateTaskCompletion,
};
