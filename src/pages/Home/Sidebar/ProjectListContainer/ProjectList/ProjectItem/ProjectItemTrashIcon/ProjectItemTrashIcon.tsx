import { FC, FormEvent, useEffect } from 'react';
import { theme, useToast } from '@chakra-ui/react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProjectListItemTrashIcon } from './styles';
import { useAppContext } from '../../../../../../../hooks/useAppContext';
import { useProjectContext } from '../../../../../../../hooks/useProjectContext';

const ProjectItemTrashIcon: FC<{ projectId: string }> = ({ projectId }) => {
  const toast = useToast();
  const { appState, setCustomModalState } = useAppContext();
  const { projectState, deleteProject } = useProjectContext();

  // Reset state when project loading changes so modal renders button loading
  useEffect(() => {
    setCustomModalState({ ...appState.customModalState, isModalLoading: projectState.isProjectLoading });
  }, [projectState.isProjectLoading])

  // Handling click also when pressing enter
  const handleKeyUp = (e: { which: number }) => {
    if (e.which === 13 || e.which === 32) {
      handleClick({ stopPropagation: () => {} } as FormEvent); // Sends empty function so dont breaks
    }
  };

  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    setCustomModalState(
      { 
        display: true, 
        title: 'Warning!',
        text: 'Delete this project?',
        confirmationText: 'Delete',
        cancelText: 'Cancel',
        isModalLoading: projectState.isProjectLoading,
        confirmationCallback: async () => {
          await deleteProject(projectId); 
          toast({
            title: 'Project Deleted',
            position: 'top-right', 
            status: 'success', 
            isClosable: true
          });
        }
      }
    );
  };

  return (
    <ProjectListItemTrashIcon tabIndex={0} onKeyUp={handleKeyUp} onClick={handleClick}>
      <FontAwesomeIcon color={theme.colors.red[500]} icon={faTrashCan} />
    </ProjectListItemTrashIcon>
  );
};

export default ProjectItemTrashIcon;