import { FC } from 'react';

import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Dashboard from './Dashboard';
import TaskListContainer from './TaskListContainer';
import { Container, ChildContainer } from './styles';
import { TaskProvider } from '../../context/Task/TaskProvider';
import CustomModal from '../../common/CustomModal/CustomModal';
import { ProjectProvider } from '../../context/Project/ProjectProvider';

const Home: FC = () => {
  return (
    <ProjectProvider>
      <TaskProvider>
        <CustomModal/>
        <Container>
          <Sidebar />
          <MobileNav />
          <ChildContainer>
            <Dashboard />
            <TaskListContainer />
          </ChildContainer>
        </Container>
      </TaskProvider>
    </ProjectProvider>
  );
}

export default Home;