// import React, { FC, useState, FormEvent } from 'react';
// import { Box, FormControl, FormLabel, Input, Select, Stack } from '@chakra-ui/react';
// import { Button, Center } from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons';
// import { SelectWithImages } from '../SelectWithImage/SelectWithImage'; // Припускається, що компонент `SelectWithImages` розташований у тому ж каталозі
// import Pizza from '../../models/Pizza';
// import './styles.css';

// interface AddPizzaFormProps {
//   addPizza: (newPizza: Pizza) => void;
// }

// const initState = {
//   category: '',
//   title: '',
//   price: '',
//   img: '',
// };

// export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
//   const [newPizza, setNewPizza] = useState(initState);
//   const [selectedOption, setSelectedOption] = useState('');

//   const [imageList, setImageList] = useState([
//     'public/img/hit/1.png',
//     'public/img/hit/2.png',
//     'public/img/hit/3.png',
//     // Додайте інші URL-и зображень сюди
//   ]);

//   const handleImageDrop = (e: React.DragEvent<HTMLDivElement>, imageName: string) => {
//     e.preventDefault();
//     setNewPizza({
//       ...newPizza,
//       img: imageName, // Збереження імені картинки
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;

//     setNewPizza({
//       ...newPizza,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log('Вибрана категорія:', newPizza.category); // Виводимо вибрану категорію
//     console.log('Вибрана назва продукту:', newPizza.title); // Виводимо вибрану назву продукту
//     console.log('Вибране фото:', selectedOption);
//     console.log('Ціна:', newPizza.price);

//     if (newPizza.title && newPizza.price && selectedOption && newPizza.category) {
//       addPizza({
//         title: newPizza.title,
//         img: selectedOption,
//         price: Number(newPizza.price),
//         category: newPizza.category, // Додаємо категорію до карточки товару
//         id: Math.floor(Math.random() * 9000),
//       });
//       setNewPizza(initState);
//       setSelectedOption('');
//     }
//   };

//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <Box
//       bg="blackAlpha.400"
//       borderRadius="lg"
//       w="600px"
//       p={4}
//       color="white"
//       border="1px solid orange.300">
//       <FormControl>
//         <Stack marginBottom={5} spacing={3}>
//           <div>
//             <FormLabel color="rgb(255, 180, 41)">Категорія</FormLabel>
//             <Select
//               className="select-style select-style--category"
//               bg="gray.900"
//               borderColor="orange.300"
//               variant="outline"
//               name="category"
//               placeholder="Виберіть категорію"
//               value={newPizza.category}
//               onChange={handleChange}>
//               <option value="option2">🏆 Xіт продажів</option>
//               <option value="option3">🍕 Новинки</option>
//               <option value="option4">🍟 Основні страви</option>
//             </Select>
//           </div>
//           <div>
//             <FormLabel color="rgb(255, 180, 41)">Продукт</FormLabel>
//             <Select
//               className="select-style"
//               bg="gray.900"
//               borderColor="orange.300"
//               variant="outline"
//               placeholder="Виберіть назву"
//               name="title"
//               value={newPizza.title}
//               onChange={handleChange}>
//               <option value="european">Піца Європейська</option>
//               <option value="meat">Піца з Мяса</option>
//               <option value="hawaiian">Піца Гавайська</option>
//               <option value="fourCheese">Піца 4 Сири</option>
//               <option value="caesar">Піца Цезар</option>
//               <option value="pepperoni">Піца Папероні</option>
//               <option value="diablo">Піца Діабло</option>
//             </Select>
//           </div>
//           <div>
//             <FormLabel color="rgb(255, 180, 41)">Ціна</FormLabel>
//             <Input
//               required
//               type="number"
//               bg="gray.900"
//               borderColor="orange.300"
//               // placeholder="Встановіть ціну"
//               _placeholder={{
//                 color: '#fff',
//               }}
//               name="price"
//               value={newPizza.price}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               placeholder={isFocused ? ' ₴' : 'Встановіть ціну'}

//               // _focus={{
//               //   _placeholder: {
//               //     opacity: 0, // Робить плейсхолдер невидимим при фокусі
//               //   },
//               // }}
//             />
//           </div>
//           {/* <div>
//             <FormLabel color="rgb(255, 180, 41)">Фото</FormLabel>
//             <div className="select-photo">
//               <SelectWithImages
//                 value={selectedOption}
//                 onChange={(value) => setSelectedOption(value)}
//               />
//             </div>
//           </div> */}
//         </Stack>

//         <div>
//           <FormLabel color="rgb(255, 180, 41)">Фото</FormLabel>
//           <div
//             onDrop={(e) => {
//               e.preventDefault();
//               const file = e.dataTransfer.files[0];
//               if (file) {
//                 const fileName = file.name;
//                 setNewPizza({
//                   ...newPizza,
//                   img: fileName, // Замінюємо поле img іменем файлу
//                 });
//               }
//             }}
//             onDragOver={(e) => e.preventDefault()}
//             style={{
//               width: '100px',
//               height: '100px',
//               border: '2px dashed #ddd',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             {newPizza.img ? newPizza.img : 'Перетягніть сюди картинку'}
//           </div>
//         </div>

//         <Center>
//           <Button
//             variant="outline"
//             colorScheme="tomate"
//             leftIcon={<AddIcon />}
//             onClick={handleSubmit}>
//             ДОДАТИ В МЕНЮ
//           </Button>
//         </Center>
//       </FormControl>
//     </Box>
//   );
// };

//===========================================================

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
      // Додайте інші URL-и зображень для цієї категорії
    ],
    option3: ['public/img/new/1.png', 'public/img/new/2.png', 'public/img/new/3.png'],
    option4: ['public/img/food/1.png', 'public/img/food/2.png', 'public/img/food/3.png'],
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
    <Box
      bg="blackAlpha.400"
      borderRadius="lg"
      w="600px"
      p={4}
      color="white"
      border="1px solid orange.300">
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
                  <img width={'110px'} src={image} alt={`Фото ${index}`} />
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
                width: '100px',
                height: '100px',
                border: '2px dashed #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
