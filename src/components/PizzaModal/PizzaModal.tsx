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

  const [quantity, setQuantity] = useState(1);

  if (!pizza) {
    return null;
  }



  console.log(pizza);
  console.log(additionalDescription);

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
        <ModalHeader fontWeight={'bold'} fontSize={'24px'} paddingBottom={0}>
          {pizza.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            borderRadius={'lg'}
            width={'80%'}
            src={pizza.img}
            alt={pizza.title}
            marginBottom={'12px'}
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
            {/* {pizza.price.toFixed(2)} UAH */}
            {typeof pizza.price === 'number' ? pizza.price.toFixed(2).toString() : 'Invalid Price'} UAH
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
          <Button width="100%" colorScheme="orange" mr={3} onClick={onClose} fontSize={22}>
            Додати {quantity} за {totalCost.toFixed(2)} грн
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
