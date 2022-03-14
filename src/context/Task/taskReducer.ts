import { Task, TaskState } from './TaskContext';

export type TaskReducerAction =
  | { type: TaskReducerActions.SET, payload: Task[] }
  | { type: TaskReducerActions.ADD, payload: Task }
  | { type: TaskReducerActions.DELETE, payload: { id: string } }
  | { type: TaskReducerActions.SELECT, payload: { id: string } }
  | { type: TaskReducerActions.DESELECT, payload: null }
  | { type: TaskReducerActions.MODIFY, payload: Task }
  | { type: TaskReducerActions.SET_DISPLAY_TASK_FORM_MODAL, payload: { bool: boolean } }
  | { type: TaskReducerActions.SET_LOADING, payload: { bool: boolean } };


export enum TaskReducerActions {
  'SET',
  'ADD',
  'MODIFY',
  'DELETE',
  'SELECT',
  'DESELECT',
  'SET_DISPLAY_TASK_FORM_MODAL',
  'SET_LOADING'
};

export const taskReducer = (state: TaskState, action: TaskReducerAction): TaskState => {
  switch (action.type) {
    case TaskReducerActions.SET:
      return {
        ...state,
        tasks: action.payload,
      }

    case TaskReducerActions.SET_LOADING:
      return {
        ...state,
        isTaskLoading: action.payload.bool
      };

    case TaskReducerActions.ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case TaskReducerActions.DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };

    case TaskReducerActions.SELECT:
      return {
        ...state,
        selectedTask: state.tasks.filter((task) => task.id === action.payload.id)[0]
      };

    case TaskReducerActions.DESELECT:
      return {
        ...state,
        selectedTask: { } as Task
      };

    case TaskReducerActions.MODIFY:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        })
      };

    case TaskReducerActions.SET_DISPLAY_TASK_FORM_MODAL:
      return {
        ...state,
        displayTaskFormModal: action.payload.bool
      };

    default:
      return state;
  }
};