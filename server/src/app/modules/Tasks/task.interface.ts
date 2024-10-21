export type TTask = {
  taskName: string;
  date: Date;
  priority: "low" | "medium" | "high";
  tags: string;
};
