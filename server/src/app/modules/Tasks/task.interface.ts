export type TTask = {
  taskName: string;
  description: string;
  date: Date;
  priority: "low" | "medium" | "high";
  category: "Work" | "Personal" | "Others";
  isCompleted: boolean;
  reminder: boolean;
};
