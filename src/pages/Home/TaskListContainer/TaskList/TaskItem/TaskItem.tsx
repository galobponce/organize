import { FC } from 'react';
import { Td, Tr, useToast } from '@chakra-ui/react';

import TaskItemIcons from './TaskItemIcons';
import { cutString } from '../../../../../utils/StringUtils';
import { Task } from '../../../../../context/Task/TaskContext';
import { useAppContext } from '../../../../../hooks/useAppContext';
import { useTaskContext } from '../../../../../hooks/useTaskContext';
import { getMessageFromError } from '../../../../../utils/ErrorUtils';
import { getStringFromCustomDate } from '../../../../../utils/CustomDateUtils';

const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const toast = useToast();
  const { taskState, setTaskLoading, deleteTask, selectTask, setDisplayTaskFormModal } = useTaskContext();
  const { setCustomModalState } = useAppContext();

  const handleEditClick = () => {
    if (!task.id) return;
    selectTask(task.id);
    setDisplayTaskFormModal(true);
  };

  const handleDeleteClick = async () => {
    setCustomModalState(
      { 
        display: true, 
        title: 'Warning!',
        text: 'Are you sure you want to delete this task?',
        confirmationText: 'Yes',
        cancelText: 'Cancel',
        confirmationCallback: async () => {
          try {
            if (!task.id) return;
            setTaskLoading(true);
            await deleteTask(task.id); 
            toast({
              title: 'Task Deleted',
              position: 'top-right', 
              status: 'success', 
              isClosable: true
            }); 
          } catch (err: any) {
            toast({
              title: getMessageFromError(err),
              position: 'top-right',
              status: 'error',
              isClosable: true,
            });
          } finally {
            setTaskLoading(false);
          }
        },
        isModalLoading: taskState.isTaskLoading
      }
    )
  };

  return (
    <Tr>
      <Td>{cutString(task.name, 40)}</Td>
      <Td>{task.due_date && getStringFromCustomDate(task.due_date) || 'None'}</Td>
      <Td><TaskItemIcons edit={handleEditClick} delete={handleDeleteClick} /></Td>
    </Tr>
  );
};

export default TaskItem;