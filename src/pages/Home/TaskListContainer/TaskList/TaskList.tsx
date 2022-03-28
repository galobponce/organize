import { FC } from 'react';
import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

import TaskItem from './TaskItem';
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
    <Table marginTop='1rem' size='sm' variant='simple'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Due Date</Th>
          <Th textAlign='right'>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        { taskState.tasks.map(task => <TaskItem key={task.id} task={task} />) }
      </Tbody>
    </Table>
  );
};

export default TaskList;