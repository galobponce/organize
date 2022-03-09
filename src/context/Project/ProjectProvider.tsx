import { FC, useEffect, useReducer } from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import { Project, ProjectContext, ProjectState } from './ProjectContext';
import { projectReducer, ProjectReducerActions } from './projectReducer';
import { QueryUserProjects, AddProject, DeleteProject } from '../../utils/FirebaseUtils';

const INITIAL_STATE: ProjectState = {
  projects: [],
  selectedProject: { } as Project,
  displayProjectFormModal: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export const ProjectProvider: FC<IChildrenProps> = ({ children }) => {
  const [projectState, projectDispatch] = useReducer(projectReducer, INITIAL_STATE);

  useEffect(() => {
    fetchUserProjects();
  }, [])

  const fetchUserProjects = async () => {
    const projects = await QueryUserProjects(localStorage.getItem("userToken") || "");
    projectDispatch({ type: ProjectReducerActions.FETCH, payload: projects });
  };

  const addProject = async (name: string) => {
    const newProject: Project = { name, user: localStorage.getItem("userToken") || "" };
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
      addProject,
      deleteProject,
      selectProject,
      deselectProject,
      setDisplayProjectFormModal,
    }}>
      { children }
    </ProjectContext.Provider>
  );
};