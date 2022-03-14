import { FC } from 'react';

import TaskList from './TaskList';
import BackButton from '../../../common/BackButton';
import { cutString } from '../../../utils/StringUtils';
import { SmallTitle, BigTitle } from '../../../common/styles';
import PlusButton from '../../../common/PlusButton/PlusButton';
import { useTaskContext } from '../../../hooks/useTaskContext';
import { useProjectContext } from '../../../hooks/useProjectContext';
import { Container, BackButtonWithTitle, BackButtonContainer, TitleContainer, ChildContainer, SubtitleContainer } from './styles';

const TaskListContainer: FC = () => {
  const { taskState } = useTaskContext();
  const { projectState, deselectProject } = useProjectContext();
  
  if (!projectState.selectedProject.id) return null;

  return (
    <Container>
      <BackButtonWithTitle>
        <BackButtonContainer>
          <BackButton func={deselectProject} />
        </BackButtonContainer>
        <TitleContainer>
          <BigTitle>{ cutString(projectState.selectedProject.name, 35) }</BigTitle>
        </TitleContainer>
      </BackButtonWithTitle>
      <ChildContainer>
        <SubtitleContainer>
          <SmallTitle>{ taskState.tasks.length ? 'Tasks' : 'No Tasks Yet' }</SmallTitle>
          <PlusButton func={() => {}} />
        </SubtitleContainer>
        <TaskList />
      </ChildContainer>
    </Container>
  );
};

export default TaskListContainer;