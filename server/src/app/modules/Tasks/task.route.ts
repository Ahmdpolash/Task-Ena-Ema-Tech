import { Router } from "express";
import { taskControllers } from "./task.controller";

const router = Router();

router.post("/tasks", taskControllers.createTasks);
router.get("/tasks", taskControllers.getTasks);
router.get("/tasks/:id", taskControllers.getSingleTasks);
router.delete("/tasks/:id", taskControllers.deleteTasks);
router.put("/tasks/:id", taskControllers.updateTasks);
// router.post("/tasks/:id/complete", taskControllers.updateTaskCompletion);
router.post("/tasks/:id/complete", taskControllers.updateTaskCompletion);

export const taskRouter = router;
