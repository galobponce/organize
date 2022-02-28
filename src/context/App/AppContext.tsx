import { createContext } from 'react';

export interface AppState {
  isLoading: boolean;
};

export interface IAppContext {
  appState: AppState;
  setLoading: (bool: boolean) => void;
};

export const AppContext = createContext<IAppContext>({} as IAppContext);