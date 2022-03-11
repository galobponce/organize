import { Project, ProjectState } from './ProjectContext';

export type ProjectReducerAction =
  | { type: ProjectReducerActions.FETCH, payload: Project[] }
  | { type: ProjectReducerActions.SET_LOADING, payload: { bool: boolean } }
  | { type: ProjectReducerActions.ADD, payload: Project }
  | { type: ProjectReducerActions.DELETE, payload: { id: string } }
  | { type: ProjectReducerActions.SELECT, payload: { id: string } }
  | { type: ProjectReducerActions.DESELECT, payload: null }
  | { type: ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL, payload: { bool: boolean } };

export enum ProjectReducerActions {
  'FETCH',
  'ADD',
  'DELETE',
  'SELECT',
  'DESELECT',
  'SET_DISPLAY_PROJECT_FORM_MODAL',
  'SET_LOADING',
};

export const projectReducer = (state: ProjectState, action: ProjectReducerAction): ProjectState => {
  switch (action.type) {
    case ProjectReducerActions.FETCH:
      return {
        ...state,
        projects: action.payload
      };

    case ProjectReducerActions.SET_LOADING:
      return {
        ...state,
        isProjectLoading: action.payload.bool
      };
    
    case ProjectReducerActions.ADD:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    
    case ProjectReducerActions.DELETE:
      return {
        // Makes selectedProject empty if deleted
        ...state,
        selectedProject: state.selectedProject?.id === action.payload.id ? { } as Project : state.selectedProject,
        projects: state.projects.filter((project) => project.id !== action.payload.id)
      };

    case ProjectReducerActions.SELECT:
      return {
        ...state,
        selectedProject: state.projects.filter((project) => project.id === action.payload.id)[0]
      };

    case ProjectReducerActions.DESELECT:
      return {
        ...state,
        selectedProject: { } as Project
      };

    case ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL:
      return {
        ...state,
        displayProjectFormModal: action.payload.bool
      };

    default:
      return state;
  }
};