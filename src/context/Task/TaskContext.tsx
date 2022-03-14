import { createContext } from 'react';

export interface Task {
  id?: string;
  name: string;
  description?: string;
  user: string;
  creation_date: Date;
  due_date?: Date;
  project_id?: string;
  done: boolean;
};

export interface ITaskContext {
  taskState: TaskState;
  fetchTasksByProject: (project_id: string) => void;
  addTask: (name: string, done: boolean, description?: string, due_date?: Date) => void;
  deleteTask: (id: string) => void;
  selectTask: (id: string) => void;
  deselectTask: () => void;
  modifyTask: (task: Task) => void;
  setDisplayTaskFormModal: (bool: boolean) => void;
  setTaskLoading: (bool: boolean) => void;
};

export interface TaskState {
  tasks: Task[];
  selectedProjectTasks: Task[];
  selectedTask: Task;
  displayTaskFormModal: boolean;
  isTaskLoading: boolean;
};

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);