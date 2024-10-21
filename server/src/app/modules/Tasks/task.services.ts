import { TTask } from "./task.interface";
import { Task } from "./task.model";

const createTaskIntoDB = async (payload: TTask) => {
  const result = await Task.create(payload);

  return result;
};

const getTasksFromDB = async () => {
  const result = await Task.find();

  return result;
};

export const taskServices = { createTaskIntoDB, getTasksFromDB };
