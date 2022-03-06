import { FC, useReducer } from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import { Task, TaskContext, TaskState } from './TaskContext';
import { taskReducer, TaskReducerActions } from './taskReducer';
import { useProjectContext } from '../../hooks/useProjectContext';
import { QueryUserTasksByProject, AddTask, DeleteTask, ModifyTask } from '../../utils/FirebaseUtils';

const INITIAL_STATE: TaskState = {
  tasks: [],
  selectedProjectTasks: [],
  selectedTask: { } as Task,
  displayTaskFormModal: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export const TaskProvider: FC<IChildrenProps> = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, INITIAL_STATE);
  const { projectState } = useProjectContext();
  const { authState } = useAuthContext();

  const fetchTasksByProject = async (project_id: string) => {
    const tasks = await QueryUserTasksByProject(project_id, authState.currentUser.uid);
    taskDispatch({ type: TaskReducerActions.SET, payload: tasks });
  };

  const addTask = async (name: string, done: boolean, description?: string, due_date?: Date) => {
    const newTask: Task = {
      name,
      description,
      user: authState.currentUser.uid,
      creation_date: new Date,
      due_date,
      project_id: projectState.selectedProject.id,
      done
    };
    const createdTaskId = await AddTask(newTask);
    const createdTask: Task = { id: createdTaskId, ...newTask };
    taskDispatch({ type: TaskReducerActions.ADD, payload: createdTask });
  };

  const deleteTask = async (id: string) => {
    await DeleteTask(id);
    taskDispatch({ type: TaskReducerActions.DELETE, payload: { id } });
  };

  const selectTask = (id: string) => {
    taskDispatch({ type: TaskReducerActions.SELECT, payload: { id } });
  };

  const deselectTask = () => {
    taskDispatch({ type: TaskReducerActions.DESELECT, payload: null });
  };

  const modifyTask = async (task: Task) => {
    await ModifyTask(task);
    taskDispatch({ type: TaskReducerActions.MODIFY, payload: task });
  };

  const setDisplayTaskFormModal = (bool: boolean) => {
    taskDispatch({ type: TaskReducerActions.SET_DISPLAY_TASK_FORM_MODAL, payload: { bool } });
  };

  return (
    <TaskContext.Provider value={{
      taskState,
      fetchTasksByProject,
      addTask,
      deleteTask,
      selectTask,
      deselectTask,
      modifyTask,
      setDisplayTaskFormModal
    }}>
      { children }
    </TaskContext.Provider>
  );
};
