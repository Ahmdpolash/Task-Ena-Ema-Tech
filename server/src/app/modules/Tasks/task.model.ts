import { model, Schema } from "mongoose";
import { TTask } from "./task.interface";

const TaskSchema = new Schema<TTask>(
  {
    taskName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
    category: {
      type: String,
      enum: ["Work", "Personal", "Others"],
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    reminder: {
      type: Boolean,
      default: false, // Task reminders off by default
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<TTask>("task", TaskSchema);
