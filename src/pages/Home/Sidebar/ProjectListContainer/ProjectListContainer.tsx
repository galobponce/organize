import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectList from './ProjectList';
import { SubtitleContainer } from '../styles';
import ProjectListTitleWithIcon from './ProjectListContainerTitleWithIcon';

const ProjectListContainer: FC = () => {
  const handleAddClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <SubtitleContainer>
        <ProjectListTitleWithIcon />
        <Button size='xs' bg='inherit' rounded='sm' _hover={{bg:'inherit'}} _active={{bg:'inherit'}} onClick={handleAddClick}>
          <FontAwesomeIcon color='inherit' size='sm' icon={faAdd}></FontAwesomeIcon>
        </Button>
      </SubtitleContainer>
      {/* <ProjectList /> */}
    </>
  );
}

export default ProjectListContainer;