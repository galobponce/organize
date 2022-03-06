import { useContext } from 'react';

import { IProjectContext, ProjectContext } from '../context/Project/ProjectContext';

/**
 * Returns an object of all Project context data
 */
export const useProjectContext = (): IProjectContext => {
  return useContext(ProjectContext);
};