import { AppState, CustomModalState } from './AppContext';

export type AppReducerAction =
  | { type: AppReducerActions.SET_LOADING, payload: { bool: boolean } }
  | { type: AppReducerActions.SET_DISPLAY_MOBILE_SIDEBAR, payload: { bool: boolean } }
  | { type: AppReducerActions.SET_CUSTOM_MODAL_STATE, payload: CustomModalState };

export enum AppReducerActions {
  'SET_LOADING',
  'SET_DISPLAY_MOBILE_SIDEBAR',
  'SET_CUSTOM_MODAL_STATE'
};

export const appReducer = (state: AppState, action: AppReducerAction): AppState => {
  switch (action.type) {
    case AppReducerActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.bool
      };

    case AppReducerActions.SET_DISPLAY_MOBILE_SIDEBAR:
      return {
        ...state,
        displayMobileSidebar: action.payload.bool
      };

    case AppReducerActions.SET_CUSTOM_MODAL_STATE:
      return {
        ...state,
        customModalState: action.payload
      };

    default:
      return state;
  }
};