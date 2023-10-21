import React, { FC, useState, FormEvent, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { Button, Center } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Pizza from '../../models/Pizza';
import './styles.css';

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  category: '',
  title: '',
  price: '',
  img: '',
};

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState(initState);
  const [selectedOption, setSelectedOption] = useState('');

  const imageLists: { [key: string]: string[] } = {

    option2: [
      'public/img/hit/1.png',
      'public/img/hit/2.png',
      'public/img/hit/3.png',
      'public/img/hit/4.png',
      'public/img/hit/5.png',
    ],

    option3: [
      'public/img/new/1.png',
      'public/img/new/2.png',
      'public/img/new/3.png',
      'public/img/new/4.png',
      'public/img/new/5.png',
    ],

    option4: [
      'public/img/food/1.png',
      'public/img/food/2.png',
      'public/img/food/3.png',
      'public/img/food/4.png',
      'public/img/food/5.png',
    ],

    option5: [
      'public/img/salad/1.png',
      'public/img/salad/2.png',
      'public/img/salad/3.png',
      'public/img/salad/4.jpeg',
      'public/img/salad/5.jpeg',
    ],
  };

  const [currentImageList, setCurrentImageList] = useState(imageLists[newPizza.category] || []);

  useEffect(() => {
    // Оновлюємо currentImageList тільки при зміні категорії
    setCurrentImageList(imageLists[newPizza.category] || []);
  }, [newPizza.category]);

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>, imageName: string) => {
    e.preventDefault();
    setNewPizza({
      ...newPizza,
      img: imageName, // Збереження імені картинки
    });
    setSelectedOption(imageName); // Оновлення вибраної опції
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Вибрана категорія:', newPizza.category);
    console.log('Вибрана назва продукту:', newPizza.title);
    console.log('Вибране фото:', selectedOption);
    console.log('Ціна:', newPizza.price);

    if (newPizza.title && newPizza.price && selectedOption && newPizza.category) {
      addPizza({
        title: newPizza.title,
        img: selectedOption,
        price: Number(newPizza.price),
        category: newPizza.category, // Додаємо категорію до карточки товару
        id: Math.floor(Math.random() * 9000),
      });
      setNewPizza(initState);
      setSelectedOption('');
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box bg="blackAlpha.600" borderRadius="lg" w="600px" p={4} color="white" border="1px solid orange.300">
      <FormControl>
        <Stack marginBottom={5} spacing={3}>
          <div>
            <FormLabel color="rgb(255, 180, 41)">Категорія</FormLabel>
            <Select
              className="select-style select-style--category"
              bg="gray.900"
              borderColor="orange.300"
              variant="outline"
              name="category"
              placeholder="Виберіть категорію"
              value={newPizza.category}
              onChange={handleChange}>
              <option value="option2">🏆 Xіт продажів</option>
              <option value="option3">🍕 Новинки</option>
              <option value="option4">🍟 Основні страви</option>
              <option value="option5">🥗 Салати</option>
            </Select>
          </div>
          <div>
            <FormLabel color="rgb(255, 180, 41">Продукт</FormLabel>
            <Select
              className="select-style"
              bg="gray.900"
              borderColor="orange.300"
              variant="outline"
              placeholder="Виберіть назву"
              name="title"
              value={newPizza.title}
              onChange={handleChange}>
              <option value="european">Піца Європейська</option>
              <option value="meat">Піца з Мяса</option>
              <option value="hawaiian">Піца Гавайська</option>
              <option value="fourCheese">Піца 4 Сири</option>
              <option value="caesar">Піца Цезар</option>
              <option value="pepperoni">Піца Папероні</option>
              <option value="diablo">Піца Діабло</option>
            </Select>
          </div>
          <div>
            <FormLabel color="rgb(255, 180, 41">Ціна</FormLabel>
            <Input
              required
              type="number"
              bg="gray.900"
              borderColor="orange.300"
              _placeholder={{
                color: '#fff',
              }}
              name="price"
              value={newPizza.price}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={isFocused ? ' ₴' : 'Встановіть ціну'}
            />
          </div>
          <div>
            <FormLabel color="rgb(255, 180, 41">Фото</FormLabel>
            <div className="image-list">
              {currentImageList.map((image, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('image', image)}
                  className="image-item"
                  onClick={() => handleImageDrop(e, image)}>
                  <img
                    className="img-listCategory"
                    width={'100px'}
                    height={'100px'}
                    src={image}
                    alt={`Фото ${index}`}
                  />
                </div>
              ))}
            </div>
            <div
              onDrop={(e) => {
                e.preventDefault();
                const image = e.dataTransfer.getData('image');
                setNewPizza({
                  ...newPizza,
                  img: image,
                });
                setSelectedOption(image); // Оновлення вибраної опції
              }}
              onDragOver={(e) => e.preventDefault()}
              style={{
                width: '120px',
                height: '80px',
                border: '2px dashed #ddd',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontSize: '16px',
              }}>
              {newPizza.img ? (
                <img src={newPizza.img} alt="Вибране фото" />
              ) : (
                'Перетягніть сюди картинку'
              )}
            </div>
          </div>
        </Stack>
        <Center>
          <Button
            variant="outline"
            colorScheme="tomate"
            leftIcon={<AddIcon />}
            onClick={handleSubmit}>
            ДОДАТИ В МЕНЮ
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
};
