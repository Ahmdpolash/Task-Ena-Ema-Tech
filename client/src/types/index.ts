export interface TaskFormInputs {
  _id?: string;
  taskName: string;
  description: string;
  date: string;
  priority: string;
  category: string;
  isCompleted?: boolean;
}
