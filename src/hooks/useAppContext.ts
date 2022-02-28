import { useContext } from 'react';

import { AppContext, IAppContext } from '../context/App/AppContext';

/**
 * Returns an object of all app context data
 */
export const useAppContext = (): IAppContext => {
  return useContext(AppContext);
};