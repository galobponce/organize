import { FC } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CloseSidebarButtonContainer } from '../styles';
import { useAppContext } from '../../../../hooks/useAppContext';

const CloseSidebarButton: FC = () => {
  const { setDisplayMobileSidebar } = useAppContext();

  return(
    <CloseSidebarButtonContainer>
      <button onClick={() => setDisplayMobileSidebar(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </CloseSidebarButtonContainer>
    
  );
};

export default CloseSidebarButton;