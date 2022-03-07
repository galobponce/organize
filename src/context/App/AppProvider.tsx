import React, { useReducer } from 'react';

import { AppState } from './AppContext';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';
import { AppReducerActions } from './appReducer';

const INITIAL_STATE: AppState = {
  isLoading: false,
  displayMobileSidebar: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const AppProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, INITIAL_STATE);

  const setLoading = (bool: boolean) => {
    appDispatch({ type: AppReducerActions.SET_LOADING, payload: { bool } });
  };

  const setDisplayMobileSidebar = (bool: boolean) => {
    appDispatch({ type: AppReducerActions.SET_DISPLAY_MOBILE_SIDEBAR, payload: { bool } });
  };

  return (
    <AppContext.Provider value={{
      appState,
      setLoading,
      setDisplayMobileSidebar
    }}>
      { children }
    </AppContext.Provider>
  );
};