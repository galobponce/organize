import { createContext } from 'react';

export interface AppState {
  isLoading: boolean;
  displayMobileSidebar: boolean;
};

export interface IAppContext {
  appState: AppState;
  setLoading: (bool: boolean) => void;
  setDisplayMobileSidebar: (bool: boolean) => void;
};

export const AppContext = createContext<IAppContext>({} as IAppContext);