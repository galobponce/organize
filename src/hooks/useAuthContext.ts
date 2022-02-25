import { useContext } from 'react';

import { AuthContext, IAuthContext } from '../context/Auth/AuthContext';

/**
 * Returns an object of all Auth context data
 */
export const useAuthContext = (): IAuthContext => {
  return useContext(AuthContext);
};