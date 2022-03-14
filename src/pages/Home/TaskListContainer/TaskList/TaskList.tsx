import { FC } from 'react';

import TaskItem from './TaskItem';
import { TaskListWrapper } from './styles';
import { useTaskContext } from '../../../../hooks/useTaskContext';

const TaskList: FC = () => {
  const { taskState } = useTaskContext();

  return (
    <TaskListWrapper>
      { 
        taskState.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      }
    </TaskListWrapper>
  );
};

export default TaskList;