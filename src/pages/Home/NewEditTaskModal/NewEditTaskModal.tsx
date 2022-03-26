import { ChangeEvent, FC, useEffect } from 'react';
import { 
  Button,
  Checkbox,
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
import FormTextArea from '../../../common/FormTextArea';
import { useTaskContext } from '../../../hooks/useTaskContext';

const NewEditTaskModal: FC = () => {
  const toast = useToast();
  const { taskState, addTask, modifyTask, setDisplayTaskFormModal, deselectTask } = useTaskContext();

  const [formValues, onInputChange, clearValues, setValues] = useForm({
    name: '',
    description: '',
    due_date: new Date(),
    done: false
  });
  const { name, description, due_date, done } = formValues;

  useEffect(() => {
    if (!taskState.selectedTask.id) return;

    setValues({
      ...formValues,
      name: taskState.selectedTask.name,
      description: taskState.selectedTask.description || '',
      due_date: taskState.selectedTask.due_date ? new Date(taskState.selectedTask.due_date) : new Date(),
      done: taskState.selectedTask.done
    });
  }, [taskState.selectedTask]);

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

    if (!taskState.selectedTask.id) {
      await addTask(name, done, description, new Date(due_date));
      toast({
        title: 'Task Created',
        position: 'top-right', 
        status: 'success', 
        isClosable: true
      });
    } else {
      await modifyTask({ ...taskState.selectedTask, name, done, description, due_date: new Date(due_date) });
      toast({
        title: 'Task Modified',
        position: 'top-right', 
        status: 'success', 
        isClosable: true
      });
    }

    handleClose();
  };

  const handleClose = () => {
    deselectTask();
    clearValues();
    setDisplayTaskFormModal(false);
  };

  const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...formValues,
      done: e.target.checked
    });
  }

  return (
    <Modal isOpen={taskState.displayTaskFormModal} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{ !taskState.selectedTask.id ? 'New' : 'Edit' } Task</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormInput type="text" name="name" label="Name" inputValue={name} onInputChange={onInputChange} required />
          <FormTextArea name="description" label="Description" inputValue={description} onInputChange={onInputChange}/>
          <FormInput type="date" name="due_date" label="Due Date" inputValue={due_date.toISOString ? due_date.toISOString().split('T')[0] : due_date} onInputChange={onInputChange} />
          <Checkbox mt='2' type='checkbox' id='done' name='done' defaultChecked={done} checked={done} onChange={onChangeCheckbox}>Done</Checkbox>
        </ModalBody>

        <ModalFooter>
          <Button isLoading={taskState.isTaskLoading} colorScheme='teal' onClick={handleClick} mr={3}>
            { !taskState.selectedTask.id ? 'Create' : 'Edit' }
          </Button>
          <Button colorScheme='gray' onClick={handleClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewEditTaskModal;