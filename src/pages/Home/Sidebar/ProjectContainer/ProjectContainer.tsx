import { FC } from 'react';
import { Box, Button} from '@chakra-ui/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SubtitleContainer } from '../styles';
import ProjectTitleAndIcon from './ProjectTItleAndIcon';

const ProjectContainer: FC = () => {
  const handleAddClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <SubtitleContainer>
        <ProjectTitleAndIcon />
        <Button size='xs' bg='inherit' rounded='sm' _hover={{bg:'inherit'}} _active={{bg:'inherit'}} onClick={handleAddClick}>
          <FontAwesomeIcon color='inherit' size='sm' icon={faAdd}></FontAwesomeIcon>
        </Button>
      </SubtitleContainer>
      
      <Box px='5'>
        <ul>
          <li>example</li>
          <li>example 2</li>
        </ul>
      </Box>
    </>
  );
}

export default ProjectContainer;