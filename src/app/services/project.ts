import {
  CreateProjectData,
  Project,
} from "../interfaces/project";
import { generateId } from "../lib/utils";

const projects: Project[] = [
  {
    id: "1",
    name: "Educação Digital",
    description:
      "Projeto para ensinar programação para jovens em situação de vulnerabilidade social.",
    thematicArea: "Educação",
    startDate: "2024-01-15",
    createdAt: "2024-01-10T10:00:00Z",
  },
  {
    id: "2",
    name: "Horta Comunitária",
    description:
      "Criação de hortas urbanas em comunidades carentes para promover segurança alimentar.",
    thematicArea: "Meio Ambiente",
    startDate: "2024-02-01",
    createdAt: "2024-01-25T14:30:00Z",
  },
];

export async function getAllProjects(): Promise<
  Project[]
> {
  await new Promise((resolve) =>
    setTimeout(resolve, 100)
  );
  return projects.sort(
    (a, b) =>
      new Date(b.createdAt).getTime() -
      new Date(a.createdAt).getTime()
  );
}

export async function createProject(
  data: CreateProjectData
): Promise<Project> {
  await new Promise((resolve) =>
    setTimeout(resolve, 200)
  );

  const newProject: Project = {
    id: generateId(),
    ...data,
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);
  return newProject;
}

export async function getProjectById(
  id: string
): Promise<Project | null> {
  await new Promise((resolve) =>
    setTimeout(resolve, 100)
  );
  return (
    projects.find(
      (project) => project.id === id
    ) || null
  );
}
