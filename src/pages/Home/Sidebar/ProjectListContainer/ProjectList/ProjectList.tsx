import { FC, useEffect } from 'react';
import { List, ListItem } from '@chakra-ui/react';

import { useProjectContext } from '../../../../../hooks/useProjectContext';

const ProjectList: FC = () => {
  const { projectState, fetchUserProjects } = useProjectContext();

  useEffect(() => {
    fetchUserProjects();
  }, []);

  return (
    <List spacing={3}>
      { 
        projectState.projects.map((project) => (
          <ListItem key={project.id}>{project.name}</ListItem>
        )) 
      }
    </List>
  );
};

export default ProjectList;