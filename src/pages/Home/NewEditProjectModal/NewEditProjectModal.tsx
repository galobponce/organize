import { FC } from "react";
import { 
  Button,
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useToast 
} from "@chakra-ui/react";

import { useForm } from '../../../hooks/useForm';
import FormInput from '../../../common/FormInput';
import { useProjectContext } from '../../../hooks/useProjectContext';

const NewEditProjectModal: FC = () => {
  const toast = useToast();
  const { projectState, addProject, setDisplayProjectFormModal } = useProjectContext();

  const [formValues, onInputChange] = useForm({
    name: ''
  });
  const { name } = formValues;

  const handleClick = async () => {
    if (!name) {
      toast({
        title: 'Name is required',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    if (!projectState.selectedProject.id) {
      await addProject(name);
      toast({
        title: 'Project Created',
        position: 'top-right', 
        status: 'success', 
        isClosable: true
      });
    }

    handleClose();
  };

  const handleClose = () => {
    setDisplayProjectFormModal(false);
  };

  return (
    <Modal isOpen={projectState.displayProjectFormModal} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ !projectState.selectedProject ? 'New' : 'Edit' } Project</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormInput type="text" name="name" label="Name" inputValue={name} onInputChange={onInputChange} required />
        </ModalBody>

        <ModalFooter>
          <Button isLoading={projectState.isProjectLoading} colorScheme='teal' onClick={handleClick} mr={3}>
            { !projectState.selectedProject ? 'Create' : 'Edit' }
          </Button>
          <Button colorScheme='gray' onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewEditProjectModal;