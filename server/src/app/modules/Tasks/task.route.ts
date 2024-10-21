import { Router } from "express";
import { taskControllers } from "./task.controller";

const router = Router();

router.post("/tasks", taskControllers.createTasks);
router.get("/tasks", taskControllers.getTasks);

export const taskRouter = router;
