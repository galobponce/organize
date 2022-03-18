import { FC, FormEvent } from 'react';
import { Button, theme } from '@chakra-ui/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlusButton: FC<{ func: (ev: FormEvent) => void }> = ({ func }) => {
  return (
    <Button size='xs' bg={theme.colors.teal[400]} rounded='full' _hover={{bg: theme.colors.teal[500]}} onClick={func}>
      <FontAwesomeIcon color='white' size='sm' icon={faAdd}></FontAwesomeIcon>
    </Button>
  );
};

export default PlusButton;