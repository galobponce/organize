import React, { useReducer } from 'react';

import { AppContext } from './AppContext';
import { appReducer } from './appReducer';
import { AppReducerActions } from './appReducer';
import { AppState, CustomModalState } from './AppContext';

const INITIAL_STATE: AppState = {
  isAppLoading: false,
  displayMobileSidebar: false,
  customModalState: { } as CustomModalState
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const AppProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, INITIAL_STATE);

  const setAppLoading = (bool: boolean) => {
    appDispatch({ type: AppReducerActions.SET_LOADING, payload: { bool } });
  };

  const setDisplayMobileSidebar = (bool: boolean) => {
    appDispatch({ type: AppReducerActions.SET_DISPLAY_MOBILE_SIDEBAR, payload: { bool } });
  };

  const setCustomModalState = (customModalState: CustomModalState) => {
    appDispatch({ type: AppReducerActions.SET_CUSTOM_MODAL_STATE, payload: customModalState });
  };

  return (
    <AppContext.Provider value={{
      appState,
      setAppLoading,
      setDisplayMobileSidebar,
      setCustomModalState
    }}>
      { children }
    </AppContext.Provider>
  );
};