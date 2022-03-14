import { FC, FormEvent } from 'react';

import ProjectList from './ProjectList';
import { SubtitleContainer } from '../styles';
import PlusButton from '../../../../common/PlusButton/PlusButton';
import ProjectListTitleWithIcon from './ProjectListContainerTitleWithIcon';

const ProjectListContainer: FC = () => {
  const handleAddClick = (e: FormEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <SubtitleContainer>
        <ProjectListTitleWithIcon />
        <PlusButton func={handleAddClick} />
      </SubtitleContainer>
      <ProjectList />
    </>
  );
}

export default ProjectListContainer;