import { Wrapper } from '../Wrapper/Wrapper';
import './style.css';
import { LinkMenu } from '../LinkMenu/LinkMenu';
import { Box, Flex } from '@chakra-ui/react';
import { PizzaModal } from '../PizzaModal/PizzaModal';
import Pizza from '../../models/Pizza';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';

import { Grid, Container } from '@chakra-ui/react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Badge } from '@chakra-ui/react';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';

interface AllProductsPageProps {
  pizzasList: Pizza[];
}

interface PizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: Pizza | null;
  additionalDescription: string;
}

const formatUADateTime = (date: Date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('uk-UA', options).format(date);
};

console.log(formatUADateTime());



export const AllProductsPage: React.FC<AllProductsPageProps> = ({ pizzasList }) => {
  console.log(pizzasList);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const [additionalDescription, setAdditionalDescription] = useState<string>('');


  const additionalDescriptions: { [key: string]: string } = {
    '💥 Піца 3 Мяса': 'Додатковий опис для Піци 3 Мяса',
    '💥 Піца Європейська': 'Додатковий опис для Піци Європейська',
    '💥 Піца 4 Сири': 'Додатковий опис для Піци 4 Сири',
    '💥 Піца Цезар': 'Додатковий опис для Піци Цезар',
    '💥 Піца Діабло': 'Додатковий опис для Піци Діабло',
    "💥 Піца Барбек'ю": "Додатковий опис для Піци Барбек'ю",
    '💥 Піца Венеція': 'Додатковий опис для Піци Венеція',
    '💥 Піца Монтана': 'Додатковий опис для Піци Монтана',
    '💥 Піца Фунгі': 'Додатковий опис для Піци Фунгі',
    '💥 Піца "БУМ"': 'Додатковий опис для Піци "БУМ"',
    '💥 Фіш & Чіпс': 'Додатковий опис для Фіш & Чіпс',
    '💥 Чікен & Чіпс': 'Додатковий опис для Чікен & Чіпс',
    '💥 Цибулеві кільця New York': 'Додатковий опис для Цибулеві кільця New York',
    '💥 Картопля Фрі': 'Додатковий опис для Картопля Фрі',
    '💥 Картопля по-селянськи': 'Додатковий опис для Картопля по-селянськи',
    '💥 Салат Сантана (250г)': 'Додатковий опис для Салат Сантана (250г)',
    '💥 Салат з курки (250г)': 'Додатковий опис для Салат з курки (250г)',
    '💥 Салат Каліфорнія (250г)': 'Додатковий опис для Салат Каліфорнія (250г)',
    '💥 Салат Грецький (250г)': 'Додатковий опис для Салат Грецький (250г)',
    '💥 Салат Проковтний язик (250г)': 'Додатковий опис для Салат Проковтний язик (250г)',
  };

  const newPizza: Pizza = {
    id: 0,
    title: 'New Pizza',
    price: 0,
    img: '',
    category: '',
    description: '',
    created: new Date(),
    additionalDescription: '',
  }

  const selectedDescription = additionalDescription;


  const openModalWithPizza = (pizza: Pizza) => {
    // Отримайте додатковий опис на основі назви піци
    const additionalDescription = additionalDescriptions[pizza.title] || '';
    
    setAdditionalDescription(additionalDescription);
    setSelectedPizza(pizza);
    onOpen();
  };
  
  

  const categoryToBadge: Record<string, string> = {
    option4: 'Основні страви',
    option2: 'Xіт продажів',
    option3: 'Новинки',
    option5: 'Салати',
  };

  // const [edit, setEdit] = useState<boolean>(false);

  return (
    <Wrapper>
      <Container maxW="1300px" centerContent marginBottom={'30px'}>
        <div className="heading-wrap">
          <div className="arrow-hover">
            <Link className="link-back" to="/" imgSrc="../../../public/img/link/link10.png">
              <span>
                <FaBackward />
                <FaBackward />
              </span>
            </Link>
          </div>
          <span className="heading-cards heading--space">Меню</span>
        </div>
        <Grid className="grid-test">
          {pizzasList.length === 0 ? (
            <strong className="no-products">
              <div className="no-products-title">
                <Link to="/">
                  <span>
                    <BsPlusCircleFill />
                  </span>
                </Link>
              </div>
            </strong>
          ) : (
            pizzasList.map((pizza) => (
              <Card className="card-hover" maxW="sm" key={pizza.id}>
                <CardBody onClick={() => openModalWithPizza(pizza)} padding={4}>
                  <Image src={pizza.img} alt={pizza.title} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{pizza.title}</Heading>
                    <div className="category-wrap">
                      <span>
                        <Badge
                          ml="0"
                          fontSize="12px"
                          colorScheme="cyan"
                          borderRadius={'50px'}
                          width={'fit-content'}
                          padding={'4px 10px'}>
                          {categoryToBadge[pizza.category]}
                        </Badge>
                      </span>
                      <span className="info-icon info-icon--info">
                        <TiInfoLargeOutline />
                      </span>
                    </div>
                    <Text className="description">{pizza.description}</Text>
                    <div className="date-badge">
                      <span>
                        <Badge
                          variant="outline"
                          colorScheme="gray"
                          width={'fit-content'}
                          borderRadius={'4px'}>
                          <Text>{formatUADateTime(new Date(pizza.created))}</Text>
                        </Badge>
                      </span>
                      <span className="info-icon info-icon--edit">
                        <AiTwotoneEdit />
                      </span>
                    </div>
                    <div className="price-wrap">
                      <span>
                        <Text color="orange" fontSize="2xl">
                          {pizza.price.toFixed(2)} UAH
                        </Text>
                      </span>
                      <span className="info-icon info-icon--delete">
                        <MdDelete />
                      </span>
                    </div>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup className="button-card">
                    <Button variant="solid" colorScheme="orange">
                      Купити
                    </Button>
                    <Button
                      variant="outline"
                      colorScheme="orange"
                      fontSize={'26px'}
                      color={'orange'}>
                      <BsFillCartPlusFill />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))
          )}
        </Grid>
      </Container>
      <Box>
        <Flex className="link-cards" gap={'30px'} justifyContent={'center'} alignItems={'center'}>
          <LinkMenu to="/" imgSrc="../../../public/img/link/link10.png" text="Формування Меню" />
          <LinkMenu
            to="#"
            imgSrc="../../../public/img/link/link12.png"
            text="Магазини та подарунки"
          />
          <LinkMenu to="#" imgSrc="../../../public/img/link/link11.png" text="Кур'єр" />
        </Flex>
      </Box>
      <PizzaModal isOpen={isOpen} onClose={onClose} pizza={selectedPizza} additionalDescription={additionalDescription} />
    </Wrapper>
  );
};

export default AllProductsPage;
