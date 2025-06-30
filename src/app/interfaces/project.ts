export interface Project {
  id: string;
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
  createdAt: string;
}

export interface CreateProjectData {
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
}
