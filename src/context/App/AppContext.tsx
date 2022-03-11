import { createContext } from 'react';

export interface AppState {
  isAppLoading: boolean;
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
  isModalLoading: boolean;
};

export interface IAppContext {
  appState: AppState;
  setAppLoading: (bool: boolean) => void;
  setDisplayMobileSidebar: (bool: boolean) => void;
  setCustomModalState: (customModalState: CustomModalState) => void;
};

export const AppContext = createContext<IAppContext>({} as IAppContext);