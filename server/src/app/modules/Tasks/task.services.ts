import { TTask } from "./task.interface";
import { Task } from "./task.model";

const createTaskIntoDB = async (payload: TTask) => {
  const result = await Task.create(payload);
  return result;
};

//get all task
const getTasksFromDB = async (query: Record<string, unknown>) => {
  const queryObj: Record<string, unknown> = {};

  //search
  const TaskSearchableField = ["taskName", "category"];
  let searchTerm = ""; // SET DEFAULT VALUE

  //IF searchTerm  IS GIVEN SET IT
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Task.find({
    $or: TaskSearchableField.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  //filtering
  if (query?.priority) {
    queryObj.priority = query.priority;
  }

  const result = await Task.find(queryObj).sort({
    isCompleted: 1,
    createdAt: -1,
  });
  return result;
};

//get single task
const getSignleTasksFromDB = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};

//delete task from db

const deleteTasksFromDB = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

//update task into db
const updateTasksIntoDB = async (id: string, payload: Partial<TTask>) => {
  const result = await Task.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

//change the status
const updateTaskCompletionIntoDB = async (id: string) => {
  const result = await Task.findByIdAndUpdate(
    id,
    {
      isCompleted: true,
    },
    {
      new: true,
    }
  );
  return result;
};

export const taskServices = {
  createTaskIntoDB,
  getTasksFromDB,
  deleteTasksFromDB,
  updateTasksIntoDB,
  getSignleTasksFromDB,
  updateTaskCompletionIntoDB,
};
