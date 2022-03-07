import { FC } from 'react';

import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import { Container } from './styles';
import { TaskProvider } from '../../context/Task/TaskProvider';
import { ProjectProvider } from '../../context/Project/ProjectProvider';

const Home: FC = () => {
  return (
    <ProjectProvider>
      <TaskProvider>
        <Container>
          <Sidebar />
          <MobileNav />
        </Container>
      </TaskProvider>
    </ProjectProvider>
  );
}

export default Home;