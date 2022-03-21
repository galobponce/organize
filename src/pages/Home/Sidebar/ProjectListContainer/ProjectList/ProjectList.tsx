import { FC, useEffect } from 'react';
import { List } from '@chakra-ui/react';

import ProjectItem from './ProjectItem';
import LoaderSmall from '../../../../../common/LoaderSmall';
import { LoaderSmallContainer } from '../../../../../common/styles';
import { useProjectContext } from '../../../../../hooks/useProjectContext';

const ProjectList: FC = () => {
  const { projectState, fetchUserProjects } = useProjectContext();

  useEffect(() => {
    fetchUserProjects();
  }, []);

  if (projectState.isProjectLoading) {
    return (
      <LoaderSmallContainer>
        <LoaderSmall />
      </LoaderSmallContainer>
    );
  }

  return (
    <List mt={1}>
      { 
        projectState.projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        )) 
      }
    </List>
  );
};

export default ProjectList;