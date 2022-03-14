import { FC } from 'react';
import { Button, theme } from '@chakra-ui/react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackButton: FC<{ func: () => void }> = ({ func }) => {
  return (
    <Button onClick={func} boxShadow='base' rounded='full' background='gray.50'>
      <FontAwesomeIcon color={theme.colors.gray[600]} icon={faArrowLeft} />
    </Button>
  );
};

export default BackButton;