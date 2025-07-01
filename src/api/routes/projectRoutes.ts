import { Router } from "express";
import { createProject } from "../controllers/project";

const router = Router();

router.post("/projects", createProject);

export default router;
