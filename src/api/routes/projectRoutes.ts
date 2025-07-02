import { Router } from "express";
import {
  createProject,
  getProjects,
} from "../controllers/project";

const router = Router();

router.post("/projects", createProject);
router.get("/projects", getProjects);

export default router;
