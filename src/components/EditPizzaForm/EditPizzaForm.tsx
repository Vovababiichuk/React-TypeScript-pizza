import React, { FC, useState, FormEvent } from 'react';
import { ReactNode } from 'react';
import { Box, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { Button, Center } from '@chakra-ui/react';
import Pizza from '../../models/Pizza';
import './styles.css';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

import { BoxMyContainer } from './EditPizzaFormElements';

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
  deletePizza: (id: number) => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit, deletePizza }): ReactNode => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  console.log('edit pizza>>>> ', editPizza);

  const showSuccessAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  const showWarningAlert = () => {
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img, category, description } = editPizza;

    if (title && price && img && category && description) {
      console.log('edit pizza >>> ', editPizza);

      updatePizza(editPizza);
       
      handleToggleEdit();

      showSuccessAlert();
    } else {
      showWarningAlert();
    }
  };

  console.log('edit pizza>>>> ', editPizza);

  const setPrice = (price: string) => {
    setEditPizza({
      ...editPizza,
      price: Number(price),
    });
  };

  const handleDelete = () => {
    deletePizza(data.id);
    handleToggleEdit();
  }

  return (
    <BoxMyContainer
    // className="box-form"
    // bgImage={'public/img/bg-cut.jpg'}
    // backgroundSize={'cover'}
    // backgroundPosition={'center'}
    // borderRadius="lg"
    // w="600px"
    // p={4}
    // color="white"
    // border="1px solid orange.300"
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Stack marginBottom={5} spacing={3} gap={0}>
            <div className="close-icon">
              <span onClick={handleDelete}>❌</span>
            </div>
            {/* //NOTE - Price */}
            <div className='price-edit'>
              <FormLabel color="rgb(255, 180, 41)">Ціна</FormLabel>
              <Input
                maxLength={3} // Це обмежить введення користувача трьома символами
                inputMode="numeric" // Це обмежить введення лише цифрами
                required
                type="number"
                bg="gray.900"
                borderColor="orange.300"
                _placeholder={{
                  color: '#fff',
                }}
                name="price"
                value={editPizza.price}
                onChange={handleChange}
                placeholder={'Встановіть ціну'}
                onInput={(e) => {
                  // Забороняємо введення символів, які не є цифрами
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  // Обмежуємо довжину введеного числа до 3 символів
                  if (e.currentTarget.value.length > 3) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 3);
                  }
                  setPrice(e.currentTarget.value);
                }}
              />
            </div>
          </Stack>
          {/* //NOTE - Textarea */}
          <div>
            <FormLabel color="rgb(255, 180, 41)">Опис</FormLabel>
            <Textarea
              className="select-style"
              bg="gray.900"
              borderColor="orange.300"
              name="description"
              value={editPizza.description}
              onChange={handleChange}
              placeholder="Додайте опис"
            />
          </div>
          {/* //NOTE - Button with Alert */}
          <Center>
            <Stack direction="row" spacing={4}>
              <Button
                type="submit"
                // rightIcon={<AddIcon />}
                colorScheme="orange"
                variant="outline"
                borderColor={'rgb(255, 180, 41)'}
                color={'rgb(255, 180, 41)'}
                marginBottom={2}>
                Обновити дані
              </Button>
            </Stack>
          </Center>
          {isAlertVisible && (
            <Alert status="success" colorScheme="darkGreen">
              <AlertIcon />
              <Box>
                <AlertTitle>Успіх!</AlertTitle>
                <AlertDescription>Товар успішно оновлено!</AlertDescription>
              </Box>
            </Alert>
          )}
          {errorMessage && (
            <Alert status="error" colorScheme="darkRed">
              <AlertIcon />
              <Box>
                <AlertTitle>Помилка!</AlertTitle>
                <AlertDescription>Заповніть всі поля!</AlertDescription>
              </Box>
            </Alert>
          )}
        </FormControl>
      </form>
    </BoxMyContainer>
  );
};
