import { AppState } from './AppContext';

export type AppReducerAction =
  | { type: AppReducerActions.SET_LOADING, payload: { bool: boolean } };

export enum AppReducerActions {
  'SET_LOADING'
};

export const appReducer = (state: AppState, action: AppReducerAction): AppState => {
  switch (action.type) {
    case AppReducerActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.bool
      };

    default:
      return state;
  }
};