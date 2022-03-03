import { Project, ProjectState } from './ProjectContext';

export type ProjectReducerAction =
  | { type: ProjectReducerActions.FETCH, payload: Project[] }
  | { type: ProjectReducerActions.ADD, payload: Project }
  | { type: ProjectReducerActions.DELETE, payload: { id: string } }
  | { type: ProjectReducerActions.SELECT, payload: { id: string } }
  | { type: ProjectReducerActions.DESELECT, payload: null }
  | { type: ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL, payload: { boolean: boolean } };

export enum ProjectReducerActions {
  'FETCH',
  'ADD',
  'DELETE',
  'SELECT',
  'DESELECT',
  'SET_DISPLAY_PROJECT_FORM_MODAL'
};

export const projectReducer = (state: ProjectState, action: ProjectReducerAction): ProjectState => {
  switch (action.type) {
    case ProjectReducerActions.FETCH:
      return {
        ...state,
        projects: action.payload
      };
    
    case ProjectReducerActions.ADD:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    
    case ProjectReducerActions.DELETE:
      return {
        // Makes selectedProject null if deleted
        ...state,
        selectedProject: state.selectedProject?.id === action.payload.id ? null : state.selectedProject,
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
        selectedProject: null
      };

    case ProjectReducerActions.SET_DISPLAY_PROJECT_FORM_MODAL:
      return {
        ...state,
        displayProjectFormModal: action.payload.boolean
      };

    default:
      return state;
  }
};