import { FC, useEffect, useReducer } from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import { ProjectContext, ProjectState } from './ProjectContext';
import { projectReducer, ProjectReducerActions } from './projectReducer';
import { QueryUserProjects, AddProject, DeleteProject } from '../../utils/FirebaseUtils';

const INITIAL_STATE: ProjectState = {
  projects: [],
  selectedProject: null,
  displayProjectFormModal: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const ProjectProvider: FC<IChildrenProps> = ({ children }) => {
  const { authState } = useAuthContext();
  const [projectState, projectDispatch] = useReducer(projectReducer, INITIAL_STATE);

  useEffect(() => {
    fetchProjects();
  }, [])

  const fetchProjects = async () => {
    const projects = await QueryUserProjects(authState.currentUser.uid);
    projectDispatch({ type: ProjectReducerActions.FETCH, payload: projects });
  };

  const addProject = async (name: string) => {
    const projectId = await AddProject(name, authState.currentUser.uid);
    const project = { id: projectId, name, user: authState.currentUser.uid };
    projectDispatch({ type: ProjectReducerActions.ADD, payload: project });
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

  const setDisplayProjectFormModal = (boolean: boolean) => {
    projectDispatch({ type: ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL, payload: { boolean } });
  };

  return (
    <ProjectContext.Provider value={{
      projectState,
      fetchProjects,
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