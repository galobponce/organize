import { FC } from 'react';
import { Button, theme } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserIcon: FC = () => {
  return (
    <Button boxShadow='base' rounded='full' background='gray.50'>
      <FontAwesomeIcon color={theme.colors.gray[600]} icon={faUser} />
    </Button>
  );
};

export default UserIcon;