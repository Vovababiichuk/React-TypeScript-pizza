import React, { FC, useState, FormEvent, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
import { Button, Center } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Pizza from '../../models/Pizza';
import './styles.css';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { DefaultImageList, MobileImageList } from './stylePizzaComponent';
import { Textarea } from '@chakra-ui/react';

import { BoxMyContainer, VisibleTextDrop, VisibleTextTab } from './stylePizzaComponent';

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  category: '',
  title: '',
  price: '',
  img: '',
  description: '',
  created: new Date(),
  additionalDescription: '',
};

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState(initState);
  const [selectedOption, setSelectedOption] = useState('');

  const [currentStep, setCurrentStep] = useState(1);

  const [isDragAreaVisible, setIsDragAreaVisible] = useState(window.innerWidth >= 768);

  const imageLists: { [key: string]: string[] } = {
    option2: [
      '/img/hit/1.png',
      '/img/hit/2.png',
      '/img/hit/3.png',
      '/img/hit/4.png',
      '/img/hit/5.png',
    ],

    option3: [
      '/img/new/1.png',
      '/img/new/2.png',
      '/img/new/3.png',
      '/img/new/4.png',
      '/img/new/5.png',
    ],

    option4: [
      '/img/food/1.png',
      '/img/food/2.png',
      '/img/food/3.png',
      '/img/food/4.png',
      '/img/food/5.png',
    ],

    option5: [
      '/img/salad/1.png',
      '/img/salad/2.png',
      '/img/salad/3.png',
      '/img/salad/4.png',
      '/img/salad/5.png',
    ],
  };

  const [currentImageList, setCurrentImageList] = useState(imageLists[newPizza.category] || []);

  const productOptions: { [key: string]: string[] } = {
    option2: [
      '💥 Піца 3 Мяса',
      '💥 Піца Європейська',
      '💥 Піца 4 Сири',
      '💥 Піца Цезар',
      '💥 Піца Діабло',
    ],
    option3: [
      "💥 Піца Барбек'ю",
      '💥 Піца Венеція',
      '💥 Піца Монтана',
      '💥 Піца Фунгі',
      '💥 Піца "БУМ"',
    ],
    option4: [
      '💥 Фіш & Чіпс',
      '💥 Чікен & Чіпс',
      '💥 Цибулеві кільця New York',
      '💥 Картопля Фрі',
      '💥 Картопля по-селянськи',
    ],
    option5: [
      '💥 Салат Сантана (250г)',
      '💥 Салат з курки (250г)',
      '💥 Салат Каліфорнія (250г)',
      '💥 Салат Грецький (250г)',
      '💥 Салат Проковтний язик (250г)',
    ],
  };

  const [currentProductOptions, setCurrentProductOptions] = useState(
    productOptions[newPizza.category] || [],
  );

  useEffect(() => {
    // Оновлюємо currentImageList і currentProductOptions тільки при зміні категорії
    setCurrentImageList(imageLists[newPizza.category] || []);
    setCurrentProductOptions(productOptions[newPizza.category] || []);
  }, [newPizza.category]);

  useEffect(() => {
    const handleResize = () => {
      setIsDragAreaVisible(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    setNewPizza({
      ...newPizza,
      [name]: value,
    });

    // Змінюємо поточний крок в залежності від вибору користувача
    if (name === 'category') {
      setCurrentStep(2);
    } else if (name === 'title') {
      setCurrentStep(3);
    } else if (name === 'price') {
      setCurrentStep(4);
    }
  };

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showSuccessAlert = () => {
    setIsAlertVisible(true);
    setTimeout(() => {
      setIsAlertVisible(false);
    }, 3000);
  };

  const showWarningAlert = () => {
    setErrorMessage('Заповніть всі поля і виберіть фото');
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Генеруємо новий `id`
    const newPizzaWithId = {
      ...newPizza,
      id: Math.floor(Math.random() * 9000),
    };

    console.log('Категорія:', newPizzaWithId.category);
    console.log('Назва продукту:', newPizzaWithId.title);
    console.log('Вибране фото:', selectedOption);
    console.log('Ціна:', newPizzaWithId.price);
    console.log('Опис:', newPizzaWithId.description);
    console.log('Дата створення:', newPizzaWithId.created);
    console.log('Додаткова інформація:', newPizzaWithId.additionalDescription);
    console.log('ID:', newPizzaWithId.id);

    if (
      newPizzaWithId.title &&
      newPizzaWithId.price &&
      selectedOption &&
      newPizzaWithId.category &&
      newPizzaWithId.description
    ) {
      addPizza({
        id: newPizzaWithId.id,
        title: newPizzaWithId.title,
        price: Number(newPizzaWithId.price),
        img: selectedOption,
        category: newPizzaWithId.category, // Додаємо категорію до карточки товару
        description: newPizzaWithId.description,
        additionalDescription: newPizzaWithId.additionalDescription,
        created: new Date(),
      });
      setNewPizza(initState);
      setSelectedOption('');
      setCurrentStep(1); // Після додавання скидаємо крок назад

      showSuccessAlert();
    } else {
      showWarningAlert();
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleImageClick = (image: string) => {
    setNewPizza({
      ...newPizza,
      img: image,
    });
    setSelectedOption(image);
    setCurrentStep(4);
  };

  const setPrice = (price: string) => {
    // Якщо ви хочете щось зробити зі значенням ціни, виконайте це тут.
    // Наприклад, перетворіть рядок у число та збережіть його в стані.
    // Наприклад, так:
    setNewPizza({
      ...newPizza,
      price: price,
    });
  };

  return (
    <BoxMyContainer
    // className="box-form"
    // bgImage={'/img/bg-cut.jpg'}
    // backgroundSize={'cover'}
    // backgroundPosition={'center'}
    // borderRadius="lg"
    // w="600px"
    // p={4}
    // color="white"
    // border="1px solid orange.300"
    >
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
              onChange={handleChange}
              isDisabled={currentStep < 1} // Поле неактивне, якщо крок менше 1
            >
              <option value="option4">🍟 Основні страви</option>
              <option value="option2">🏆 Xіт продажів</option>
              <option value="option3">🍕 Новинки</option>
              <option value="option5">🥗 Салати</option>
            </Select>
          </div>
          <div>
            <FormLabel color="rgb(255, 180, 41)">Продукт</FormLabel>
            <Select
              className="select-style"
              bg="gray.900"
              borderColor="orange.300"
              variant="outline"
              placeholder="Виберіть назву"
              name="title"
              value={newPizza.title}
              onChange={handleChange}
              isDisabled={currentStep < 2} // Поле неактивне, якщо крок менше 2
            >
              {currentProductOptions.map((product, index) => (
                <option key={index} value={product}>
                  {product}
                </option>
              ))}
            </Select>
          </div>
          <div>
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
              value={newPizza.price}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={isFocused ? ' ₴' : 'Встановіть ціну'}
              isDisabled={currentStep < 3} // Поле неактивне, якщо крок менше 3
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
          <Center>
            <div>
              {/* <FormLabel color="rgb(255, 180, 41)" textAlign={'center'} marginBottom={0} fontSize={'18px'} marginRight={0}>Фото</FormLabel> */}

              <DefaultImageList>
                <div className="image-list">
                  {currentImageList.map((image, index) => (
                    <div
                      key={index}
                      draggable
                      onDragStart={(e) => e.dataTransfer.setData('image', image)}>
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
              </DefaultImageList>

              <MobileImageList>
                <div className="image-list">
                  {isDragAreaVisible && (
                    <div
                      onDrop={(e) => {
                        e.preventDefault();
                        const image = e.dataTransfer.getData('image');
                        setNewPizza({
                          ...newPizza,
                          img: image,
                        });
                        setSelectedOption(image);
                        setCurrentStep(4);
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      style={{
                        width: '120px',
                        height: '80px',
                        border: '2px dashed rgb(255, 180, 41)',
                        display: 'flex',
                        fontSize: '16px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}>
                      {newPizza.img ? (
                        <img src={newPizza.img} alt="Вибране фото" />
                      ) : (
                        'Перетягніть сюди картинку'
                      )}
                    </div>
                  )}
                  {currentImageList.map((image, index) => (
                    <div key={index} onClick={() => handleImageClick(image)}>
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
              </MobileImageList>

              <div
                className={`drop-text ${currentStep < 4 ? 'disabled' : ''}`} // Додано клас "disabled", якщо currentStep менше 4
                // className="drop-text"
                onDrop={(e) => {
                  e.preventDefault();
                  const image = e.dataTransfer.getData('image');
                  setNewPizza({
                    ...newPizza,
                    img: image,
                  });
                  setSelectedOption(image); // Оновлення вибраної опції
                  setCurrentStep(4); // Активуємо наступний крок після вибору фото
                }}
                onDragOver={(e) => e.preventDefault()}
                style={{
                  width: '120px',
                  height: '80px',
                  border: '2px dashed rgb(255, 180, 41)',
                  display: 'flex',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  fontSize: '16px',
                }}>
                {newPizza.img ? (
                  <img src={newPizza.img} alt="Вибране фото" />
                ) : (
                  <>
                    <VisibleTextDrop>Перетягніть картинку сюди</VisibleTextDrop>
                    <VisibleTextTab>Натисніть на каринку, щоб вибрати</VisibleTextTab>
                  </>
                )}
              </div>
            </div>
          </Center>
        </Stack>

        <div>
          {/* <FormLabel color="rgb(255, 180, 41)">Опис</FormLabel> */}
          <Textarea
            className="select-style"
            bg="gray.900"
            borderColor="orange.300"
            name="description"
            value={newPizza.description}
            onChange={handleChange}
            isDisabled={currentStep < 3}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Додайте опис"
          />
        </div>

        <Center>
          <Stack direction="row" spacing={4}>
            <Button
              onClick={handleSubmit}
              rightIcon={<AddIcon />}
              colorScheme="orange"
              variant="outline"
              borderColor={'rgb(255, 180, 41)'}
              color={'rgb(255, 180, 41)'}
              marginBottom={2}
              isDisabled={currentStep < 4} // Кнопка додавання в меню активна тільки на кроці 4
            >
              ДОДАТИ В МЕНЮ
            </Button>
          </Stack>
        </Center>
        {isAlertVisible && (
          <Alert status="success" colorScheme="darkGreen">
            <AlertIcon />
            <Box>
              <AlertTitle>Успіх!</AlertTitle>
              <AlertDescription>Товар успішно додано в меню.</AlertDescription>
            </Box>
          </Alert>
        )}
        {errorMessage && (
          <Alert status="error" colorScheme="darkRed">
            <AlertIcon />
            <Box>
              <AlertTitle>Помилка!</AlertTitle>
              <AlertDescription>Заповніть всі поля і виберіть фото</AlertDescription>
            </Box>
          </Alert>
        )}
      </FormControl>
    </BoxMyContainer>
  );
};
