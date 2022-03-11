import { createContext } from 'react';

export interface AppState {
  isLoading: boolean;
  displayMobileSidebar: boolean;
  customModalState: CustomModalState;
};

export interface CustomModalState {
  display: boolean;
  title: string;
  text: string;
  confirmationText: string;
  cancelText: string;
  confirmationCallback: () => any;
};

export interface IAppContext {
  appState: AppState;
  setLoading: (bool: boolean) => void;
  setDisplayMobileSidebar: (bool: boolean) => void;
  setCustomModalState: (customModalState: CustomModalState) => void;
};

export const AppContext = createContext<IAppContext>({} as IAppContext);