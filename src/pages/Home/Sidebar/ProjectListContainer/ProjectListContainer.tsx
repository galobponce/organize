import { FC } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import ProjectList from './ProjectList';
import { SubtitleContainer } from '../styles';
import NewEditProjectModal from '../../NewEditProjectModal';
import PlusButton from '../../../../common/PlusButton/PlusButton';
import ProjectListTitleWithIcon from './ProjectListContainerTitleWithIcon';

const ProjectListContainer: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <NewEditProjectModal type='N' isOpen={isOpen} onClose={onClose}/>
      <SubtitleContainer>
        <ProjectListTitleWithIcon />
        <PlusButton func={onOpen} />
      </SubtitleContainer>
      <ProjectList />
    </>
  );
}

export default ProjectListContainer;