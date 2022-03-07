import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from '../../../hooks/useAppContext';

const MobileNavButton: FC = () => {
  const { setDisplayMobileSidebar } = useAppContext();

  return (
    <Button boxShadow='base' rounded='full' background='gray.50' onClick={() => {setDisplayMobileSidebar(true)}}>
      <FontAwesomeIcon icon={faBars} />
    </Button>
  );
};

export default MobileNavButton;