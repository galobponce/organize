import { FC } from 'react';

import { Container } from './styles';
import { BigTitle, SmallTitle } from '../../../common/styles';
import { useProjectContext } from '../../../hooks/useProjectContext';

const Dashboard: FC = () => {
  const { projectState } = useProjectContext();
  
  if (projectState.selectedProject.id) return null;

  return (
    <Container>
      <BigTitle>Dashboard</BigTitle>
      <SmallTitle>Coming Soon... 🔨</SmallTitle>
    </Container>
  );
};

export default Dashboard;