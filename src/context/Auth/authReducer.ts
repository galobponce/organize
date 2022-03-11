import { AuthState } from './AuthContext';

export type AuthReducerAction =
  | { type: AuthReducerActions.SET_LOADING, payload: { bool: boolean } };

export enum AuthReducerActions {
  'SET_LOADING'
};

export const authReducer = (state: AuthState, action: AuthReducerAction): AuthState => {
  switch (action.type) {
    case AuthReducerActions.SET_LOADING:
      return {
        ...state,
        isAuthLoading: action.payload.bool
      };

    default:
      return state;
  }
};