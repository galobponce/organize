import { createContext } from 'react';

export interface Project {
  id: string;
  name: string;
  user: string;
};

export interface IProjectContext {
  projectState: ProjectState;
  fetchProjects: () => void;
  addProject: (name: string) => void;
  deleteProject: (id: string) => void;
  selectProject: (id: string) => void;
  deselectProject: () => void;
  setDisplayProjectFormModal: (bool: boolean) => void;
};

export interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  displayProjectFormModal: boolean;
};

export const ProjectContext = createContext<IProjectContext>({} as IProjectContext);