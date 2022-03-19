import { FC } from 'react';

import ProjectList from './ProjectList';
import { SubtitleContainer } from '../styles';
import NewEditProjectModal from '../../NewEditProjectModal';
import PlusButton from '../../../../common/PlusButton/PlusButton';
import { useProjectContext } from '../../../../hooks/useProjectContext';
import ProjectListTitleWithIcon from './ProjectListContainerTitleWithIcon';

const ProjectListContainer: FC = () => {
  const { setDisplayProjectFormModal } = useProjectContext();

  return (
    <>
      <NewEditProjectModal />
      <SubtitleContainer>
        <ProjectListTitleWithIcon />
        <PlusButton func={() => setDisplayProjectFormModal(true)} />
      </SubtitleContainer>
      <ProjectList />
    </>
  );
}

export default ProjectListContainer;