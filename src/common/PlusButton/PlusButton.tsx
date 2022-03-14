import { FC, FormEvent } from 'react';
import { Button } from '@chakra-ui/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlusButton: FC<{ func: (ev: FormEvent) => void }> = ({ func }) => {
  return (
    <Button size='xs' bg='inherit' rounded='sm' _hover={{bg:'inherit'}} _active={{bg:'inherit'}} onClick={func}>
      <FontAwesomeIcon color='inherit' size='sm' icon={faAdd}></FontAwesomeIcon>
    </Button>
  );
};

export default PlusButton;