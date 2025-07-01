export interface IProject {
  id: string;
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
  createdAt: string;
}

export interface ICreateProjectData {
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
}
