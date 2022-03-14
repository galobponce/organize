import { FC } from 'react';
import { useToast } from '@chakra-ui/react';

import { TaskListItem } from './styles';
import TaskItemIcons from './TaskItemIcons';
import { cutString } from '../../../../../utils/StringUtils';
import { Task } from '../../../../../context/Task/TaskContext';
import { useTaskContext } from '../../../../../hooks/useTaskContext';
import { useAppContext } from '../../../../../hooks/useAppContext';
import { getMessageFromError } from '../../../../../utils/ErrorUtils';

const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const toast = useToast();
  const { taskState, setTaskLoading, deleteTask } = useTaskContext();
  const { setCustomModalState } = useAppContext();

  const handleEditClick = () => {

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
    <TaskListItem>
      {cutString(task.name, 40)}
      <TaskItemIcons edit={handleEditClick} delete={handleDeleteClick} />
    </TaskListItem>
  );
};

export default TaskItem;