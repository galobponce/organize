import { FC } from 'react';
import { Button, theme } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { TaskItemIconsContainer } from './styles';

const TaskItemIcons: FC<{ edit: () => void, delete: () => void }> = (props) => {
  return (
    <TaskItemIconsContainer>
      <Button size='sm' bg='inherit' rounded='full' onClick={props.edit}>
        <FontAwesomeIcon color='initial' size='1x' icon={faEdit}></FontAwesomeIcon>
      </Button>
      <Button size='sm' bg='inherit' rounded='full' _hover={{backgroundColor: theme.colors.red[100]}} onClick={props.delete}>
        <FontAwesomeIcon color='red' size='1x' icon={faTrashCan}></FontAwesomeIcon>
      </Button>
    </TaskItemIconsContainer>
  );
};

export default TaskItemIcons;