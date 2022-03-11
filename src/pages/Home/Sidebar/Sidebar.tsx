import { FC } from 'react';
import { Divider } from '@chakra-ui/react';

import UserIcon from '../UserIcon/UserIcon';
import { Logo } from '../../../common/styles';
import CloseSidebarButton from './CloseSidebarButton';
import { Container, UserIconContainer } from './styles';
import ProjectListContainer from './ProjectListContainer';
import { useAppContext } from '../../../hooks/useAppContext';

const Sidebar: FC = () => {
  const { appState } = useAppContext();

  return (
    <Container displayMobile={appState.displayMobileSidebar}>
      <div>
        <CloseSidebarButton />
        <Logo>Organize</Logo>
        <Divider mt={2} mb={8} />
        <ProjectListContainer />
      </div>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>
    </Container>
  );
};

export default Sidebar;