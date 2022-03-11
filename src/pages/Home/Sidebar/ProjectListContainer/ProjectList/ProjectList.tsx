import { FC, useEffect } from 'react';
import { List } from '@chakra-ui/react';

import ProjectItem from './ProjectItem';
import { useProjectContext } from '../../../../../hooks/useProjectContext';

const ProjectList: FC = () => {
  const { projectState, fetchUserProjects } = useProjectContext();

  useEffect(() => {
    fetchUserProjects();
  }, []);

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