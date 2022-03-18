import { FC } from 'react';
import { 
  Modal, 
  ModalBody,
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  Button 
} from '@chakra-ui/react';

import { useAppContext } from '../../hooks/useAppContext';

const CustomModal: FC = () => {
  const { appState, setCustomModalState } = useAppContext();
  const { customModalState } = appState;
  const { display,title, text, confirmationText, cancelText, confirmationCallback, isModalLoading } = customModalState;

  const hideCustomModal = () => {
    setCustomModalState({ ...customModalState, display: false });
  };

  const handleConfirmation = async () => {
    await confirmationCallback();
    hideCustomModal();
  };

  return (
    <Modal isOpen={display} onClose={hideCustomModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign='left'>
          {text}
        </ModalBody>
        <ModalFooter>
          <Button isLoading={isModalLoading} onClick={handleConfirmation} mr={3} colorScheme='red'>{confirmationText}</Button>
          <Button onClick={hideCustomModal} colorScheme='gray'>{cancelText}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;