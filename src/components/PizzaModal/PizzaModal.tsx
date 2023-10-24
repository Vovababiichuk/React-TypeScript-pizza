import React from 'react';
import { useState } from 'react';
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

import { TextTitleDescription } from './ModalElements.ts';
import {
  ButtonPlus,
  ButtonMinus,
  Number,
  ContainerDiv,
  ContainerWrapFlex,
} from './ModalElements.ts';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

interface PizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: Pizza | null;
  additionalDescription: string;
}

export const PizzaModal: React.FC<PizzaModalProps> = ({
  isOpen,
  onClose,
  pizza,
  additionalDescription,
}) => {
  if (!pizza) {
    return null;
  }

  console.log(pizza);
  console.log(additionalDescription);

  const [quantity, setQuantity] = useState(1);
  const pricePerPizza = pizza.price;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const totalCost = pricePerPizza * quantity;

  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight={'bold'} fontSize={'24px'}>
          {pizza.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            borderRadius={'lg'}
            width={'100%'}
            marginBottom={'10px'}
            src={pizza.img}
            alt={pizza.title}
          />
          <Text>
            <TextTitleDescription>Опис з карточки: </TextTitleDescription>
            {pizza.description}
          </Text>
          <Text>
            <TextTitleDescription>Додатковий опис з сервера: </TextTitleDescription>
            {additionalDescription}
          </Text>
          <Text color="orange" fontSize="2xl">
            {pizza.price.toFixed(2)} UAH
          </Text>
        </ModalBody>
        <ContainerWrapFlex>
          <ButtonMinus onClick={decrementQuantity}>
            <FaMinus />
          </ButtonMinus>
          <Number>{quantity}</Number>
          <ButtonPlus onClick={incrementQuantity}>
            <FaPlus />
          </ButtonPlus>
        </ContainerWrapFlex>
        <ModalFooter>
          <Button width="100%" colorScheme="blue" mr={3} onClick={onClose} fontSize={20}>
            Додати {quantity} за {totalCost.toFixed(2)} грн
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
