import { FC, FormEvent } from 'react';
import { theme, useToast } from '@chakra-ui/react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProjectListItemTrashIcon } from './styles';
import { useAppContext } from '../../../../../../../hooks/useAppContext';
import { useProjectContext } from '../../../../../../../hooks/useProjectContext';
import { getMessageFromError } from '../../../../../../../utils/ErrorUtils';

const ProjectItemTrashIcon: FC<{ projectId: string }> = ({ projectId }) => {
  const toast = useToast();
  const { setCustomModalState } = useAppContext();
  const { projectState, deleteProject, setProjectLoading } = useProjectContext();

  const handleKeyUp = (e: { which: number }) => {
    if (e.which === 13 || e.which === 32) {
      handleClick({ stopPropagation: () => {} } as FormEvent);
    }
  };

  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    setCustomModalState(
      { 
        display: true, 
        title: 'Warning!',
        text: 'Are you sure you want to delete this project?',
        confirmationText: 'Yes',
        cancelText: 'Cancel',
        confirmationCallback: async () => {
          try {
            setProjectLoading(true);
            await deleteProject(projectId); 
            toast({
              title: 'Project Deleted',
              position: 'top-right', 
              status: 'success', 
              isClosable: true
            }); 
          } catch (err: any) {
            toast({
              title: getMessageFromError(err),
              position: 'top-right',
              status: 'error',
              isClosable: true,
            });
          } finally {
            setProjectLoading(false);
          }
        },
        isModalLoading: projectState.isProjectLoading
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