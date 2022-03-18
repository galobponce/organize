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
import { Project } from '../../../context/Project/ProjectContext';
import { useProjectContext } from '../../../hooks/useProjectContext';

export interface INewEditProjectModal {
  type: 'N' | 'E';
  project?: Project;
  isOpen: boolean;
  onClose: () => void;
};

const NewEditProjectModal: FC<INewEditProjectModal> = ({ type, isOpen, onClose }) => {
  const toast = useToast();
  const { projectState, addProject, setProjectLoading } = useProjectContext();

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

    if (type === 'N') {
      await addProject(name);
      toast({
        title: 'Project Created',
        position: 'top-right', 
        status: 'success', 
        isClosable: true
      });
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ type === 'N' ? 'New' : 'Edit' } Project</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormInput type="text" name="name" label="Name" inputValue={name} onInputChange={onInputChange} required />
        </ModalBody>

        <ModalFooter>
          <Button isLoading={projectState.isProjectLoading} colorScheme='teal' onClick={handleClick} mr={3}>
            { type === 'N' ? 'Create' : 'Edit' }
          </Button>
          <Button colorScheme='gray' onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewEditProjectModal;