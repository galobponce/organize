import { FC } from 'react';

import UserIcon from '../UserIcon/UserIcon';
import CloseSidebarButton from './CloseSidebarButton';
import { Container, UserIconContainer } from './styles';
import ProjectListContainer from './ProjectListContainer';
import { useAppContext } from '../../../hooks/useAppContext';
import { Logo, VerticalEmptySeparator } from '../../../common/styles';

const Sidebar: FC = () => {
  const { appState } = useAppContext();

  return (
    <Container displayMobile={appState.displayMobileSidebar}>
      <div>
        <CloseSidebarButton />
        <Logo>Organize</Logo>
        <VerticalEmptySeparator size='xl'/>
        <ProjectListContainer />
      </div>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>
    </Container>
  );
};

export default Sidebar;