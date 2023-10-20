import { FC, useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';
import Pizza from '../../models/Pizza';
import { HiPlusCircle } from 'react-icons/hi';

import { Box, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { HStack, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

//NOTE - пропишем початкове значення полей для початкового стану (newPizza)
const initState = {
  title: '',
  price: '',
  img: '',
};

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{ title: string; price: string; img: string }>(
    initState,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  console.log('new pizza, newPizza');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Math.floor(Math.random() * 9000),
      });
      setNewPizza(initState);
    }
  };

  console.log(newPizza);

  return (
    <Box bg="whiteAlpha.100" borderRadius={'lg'} w="600px" p={4} color="white">
      <FormControl>
        <Stack spacing={3}>
          <div>
            <FormLabel color="grey">Піца</FormLabel>
            <Select
              bg="gray.900"
              borderColor="orange.300"
              variant="outline"
              placeholder="Виберіть піцу">
              <option value="option1">Піца Європейська</option>
              <option value="option1">Піца з Мяса</option>
              <option value="option1">Піца Гавайська</option>
              <option value="option1">Піца 4 Сири</option>
              <option value="option1">Піца Цезар</option>
              <option value="option1">Піца Папероні</option>
              <option value="option1">Піца Діабло</option>
            </Select>
          </div>
          <div>
            <FormLabel color="grey">Ціна</FormLabel>
            <Input
              required
              type="number"
              bg="gray.900"
              borderColor="orange.300"
              placeholder="200-500₴"
            />
          </div>
          <div>
            <FormLabel color="grey">Фото</FormLabel>
            <Input
              required
              bg="gray.900"
              borderColor="orange.300"
              type="number"
              placeholder="1-7"
              marginBottom={7}
            />
          </div>
        </Stack>
        <HStack>
          <Button variant="outline" colorScheme="tomate" leftIcon={<AddIcon />}>
            ДОДАТИ В МЕНЮ
          </Button>
        </HStack>
      </FormControl>
    </Box>

    // <form onSubmit={handleSubmit}>
    // 	<input
    // 		type='text'
    // 		name='title'
    // 		placeholder='Name'
    // 		onChange={handleChange}
    // 		value={newPizza.title}
    // 	/>
    // 	<input
    // 		type='number'
    // 		name='price'
    // 		placeholder='Price'
    // 		onChange={handleChange}
    // 		value={newPizza.price}
    // 	/>
    // 	<input
    // 		type='text'
    // 		name='img'
    // 		placeholder='Images'
    // 		onChange={handleChange}
    // 		value={newPizza.img}
    // 	/>
    // 	<button type='submit' className='add'>
    // 		<span>Add in menu</span>
    // 		<span className='icon'><HiPlusCircle /></span>
    // 	</button>
    // </form>
  );
};
