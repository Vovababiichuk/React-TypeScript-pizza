import React from 'react';
import Pizza from '../../models/Pizza';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from '@chakra-ui/react';

interface PizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: Pizza | null;
}

export const PizzaModal: React.FC<PizzaModalProps> = ({ isOpen, onClose, pizza }) => {
  if (!pizza) {
    return null;
  }

	console.log(pizza)

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{pizza.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={pizza.img} alt={pizza.title} />
          <Text>{pizza.description}</Text>
          <Text color="orange" fontSize="2xl">
            {pizza.price.toFixed(2)} UAH
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Закрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

