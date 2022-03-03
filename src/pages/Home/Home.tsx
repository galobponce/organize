import { FC } from 'react';

import { ProjectProvider } from '../../context/Project/ProjectProvider';

const Home: FC = () => {
  return (
    <ProjectProvider>
      <h1>Home</h1>
    </ProjectProvider>
  );
}

export default Home;