import { useContext } from 'react';

import { ITaskContext, TaskContext } from '../context/Task/TaskContext';

/**
 * Returns an object of all Task context data
 */
export const useTaskContext = (): ITaskContext => {
  return useContext(TaskContext);
};