import { FC } from 'react';
import { Skeleton } from '@chakra-ui/react';

import TaskList from './TaskList';
import BackButton from '../../../common/BackButton';
import { cutString } from '../../../utils/StringUtils';
import PlusButton from '../../../common/PlusButton/PlusButton';
import { useTaskContext } from '../../../hooks/useTaskContext';
import NewEditTaskModal from '../NewEditTaskModal/NewEditTaskModal';
import { useProjectContext } from '../../../hooks/useProjectContext';
import { SmallTitle, BigTitle } from '../../../common/styles';
import { Container, BackButtonWithTitle, BackButtonContainer, TitleContainer, ChildContainer, SubtitleContainer } from './styles';

const TaskListContainer: FC = () => {
  const { taskState, setDisplayTaskFormModal } = useTaskContext();
  const { projectState, deselectProject } = useProjectContext();
  
  if (!projectState.selectedProject.id) return null;

  return (
    <Container>
      <NewEditTaskModal />
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
          <Skeleton isLoaded={!taskState.isTaskLoading}>
            <SmallTitle>{ taskState.tasks.length ? 'Tasks' : 'No Tasks Yet' }</SmallTitle>
          </Skeleton>
          <PlusButton func={() => setDisplayTaskFormModal(true)} />
        </SubtitleContainer>
        <TaskList />
      </ChildContainer>
    </Container>
  );
};

export default TaskListContainer;