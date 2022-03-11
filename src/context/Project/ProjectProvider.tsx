import { FC, useEffect, useReducer } from 'react';

import { userIdKey } from '../../config/localStorageKeys';
import { Project, ProjectContext, ProjectState } from './ProjectContext';
import { projectReducer, ProjectReducerActions } from './projectReducer';
import { QueryUserProjects, AddProject, DeleteProject } from '../../utils/FirebaseUtils';
import { useAuthContext } from '../../hooks/useAuthContext';

const INITIAL_STATE: ProjectState = {
  projects: [],
  selectedProject: { } as Project,
  displayProjectFormModal: false,
  isProjectLoading: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export const ProjectProvider: FC<IChildrenProps> = ({ children }) => {
  const [projectState, projectDispatch] = useReducer(projectReducer, INITIAL_STATE);

  const fetchUserProjects = async () => {
    const userId = localStorage.getItem(userIdKey);
    if (!userId) return; //TODO: throw error;
    const projects = await QueryUserProjects(userId);
    projectDispatch({ type: ProjectReducerActions.FETCH, payload: projects });
  };

  const setProjectLoading = (bool: boolean) => {
    projectDispatch({ type: ProjectReducerActions.SET_LOADING, payload: { bool } });
  };

  const addProject = async (name: string) => {
    const userId = localStorage.getItem(userIdKey);
    if (!userId) return; //TODO: throw error;
    const newProject: Project = { name, user: userId };
    const createdProjectId = await AddProject(newProject);
    const createdProject: Project = { id: createdProjectId, ...newProject };
    projectDispatch({ type: ProjectReducerActions.ADD, payload: createdProject });
  };

  const deleteProject = async (id: string) => {
    await DeleteProject(id);
    projectDispatch({ type: ProjectReducerActions.DELETE, payload: { id } });
  };

  const selectProject = (id: string) => {
    projectDispatch({ type: ProjectReducerActions.SELECT, payload: { id } });
  };
  
  const deselectProject = () => {
    projectDispatch({ type: ProjectReducerActions.DESELECT, payload: null });
  };

  const setDisplayProjectFormModal = (bool: boolean) => {
    projectDispatch({ type: ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL, payload: { bool } });
  };

  return (
    <ProjectContext.Provider value={{
      projectState,
      fetchUserProjects,
      setProjectLoading,
      addProject,
      deleteProject,
      selectProject,
      deselectProject,
      setDisplayProjectFormModal
    }}>
      { children }
    </ProjectContext.Provider>
  );
};