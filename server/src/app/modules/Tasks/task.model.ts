import { model, Schema } from "mongoose";
import { TTask } from "./task.interface";

const TaskSchema = new Schema<TTask>(
  {
    taskName: {
      type: "string",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<TTask>("task", TaskSchema);
