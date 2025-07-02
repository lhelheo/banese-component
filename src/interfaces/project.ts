export interface IProject {
  id: string;
  description: string;
  thematic:
    | "educacao"
    | "saude"
    | "meio-ambiente"
    | "assistencia-social";
}

export interface IProjects {
  projects: IProject[];
}
