import { FC } from 'react';

import TaskItem from './TaskItem';
import { TaskListWrapper } from './styles';
import LoaderSmall from '../../../../common/LoaderSmall';
import { LoaderSmallContainer } from '../../../../common/styles';
import { useTaskContext } from '../../../../hooks/useTaskContext';

const TaskList: FC = () => {
  const { taskState } = useTaskContext();

  if (taskState.isTaskLoading) {
    return (
      <LoaderSmallContainer>
        <LoaderSmall />
      </LoaderSmallContainer>
    );
  }

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