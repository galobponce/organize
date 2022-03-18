import { FC, useReducer, useEffect } from 'react';

import { userIdKey } from '../../config/localStorageKeys';
import { Task, TaskContext, TaskState } from './TaskContext';
import { taskReducer, TaskReducerActions } from './taskReducer';
import { useProjectContext } from '../../hooks/useProjectContext';
import { QueryUserTasksByProject, AddTask, DeleteTask, ModifyTask } from '../../utils/FirebaseUtils';

const INITIAL_STATE: TaskState = {
  tasks: [],
  selectedProjectTasks: [],
  selectedTask: { } as Task,
  displayTaskFormModal: false,
  isTaskLoading: false
};

interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
};

export const TaskProvider: FC<IChildrenProps> = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, INITIAL_STATE);
  const { projectState } = useProjectContext();

  useEffect(() => {
    if (!projectState.selectedProject.id) return;
    fetchTasksByProject(projectState.selectedProject.id);
  }, [projectState.selectedProject]);

  const fetchTasksByProject = async (project_id: string) => {
    setTaskLoading(true);
    const userId = localStorage.getItem(userIdKey);
    if (!userId) return; //TODO: throw error;
    const tasks = await QueryUserTasksByProject(project_id, userId );
    taskDispatch({ type: TaskReducerActions.SET, payload: tasks });
    setTaskLoading(false);
  };

  const setTaskLoading = (bool: boolean) => {
    taskDispatch({ type: TaskReducerActions.SET_LOADING, payload: { bool } });
  };

  const addTask = async (name: string, done: boolean, description?: string, due_date?: Date) => {
    setTaskLoading(true);
    const userId = localStorage.getItem(userIdKey);
    if (!userId) return; //TODO: throw error;
    const newTask: Task = {
      name,
      description,
      user: userId,
      creation_date: new Date,
      due_date,
      project_id: projectState.selectedProject.id,
      done
    };
    const createdTaskId = await AddTask(newTask);
    const createdTask: Task = { id: createdTaskId, ...newTask };
    taskDispatch({ type: TaskReducerActions.ADD, payload: createdTask });
    setTaskLoading(false);
  };

  const deleteTask = async (id: string) => {
    setTaskLoading(true);
    await DeleteTask(id);
    taskDispatch({ type: TaskReducerActions.DELETE, payload: { id } });
    setTaskLoading(false);
  };

  const selectTask = (id: string) => {
    taskDispatch({ type: TaskReducerActions.SELECT, payload: { id } });
  };

  const deselectTask = () => {
    taskDispatch({ type: TaskReducerActions.DESELECT, payload: null });
  };

  const modifyTask = async (task: Task) => {
    setTaskLoading(true);
    await ModifyTask(task);
    taskDispatch({ type: TaskReducerActions.MODIFY, payload: task });
    setTaskLoading(false);
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
      setDisplayTaskFormModal,
      setTaskLoading
    }}>
      { children }
    </TaskContext.Provider>
  );
};
