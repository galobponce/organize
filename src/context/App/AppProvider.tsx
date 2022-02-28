import React, { useReducer } from 'react';

import { AppState } from './AppContext';
import { AppContext } from './AppContext';
import { appReducer } from './appReducer';
import { AppReducerActions } from './appReducer';

const INITIAL_STATE: AppState = {
  isLoading: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[]
};

export const AppProvider: React.FC<IChildrenProps> = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, INITIAL_STATE);

  const setLoading = (bool: boolean) => {
    appDispatch({ type: AppReducerActions.SET_LOADING, payload: { bool } });
  };

  return (
    <AppContext.Provider value={{
      appState,
      setLoading
    }}>
      { children }
    </AppContext.Provider>
  );
};