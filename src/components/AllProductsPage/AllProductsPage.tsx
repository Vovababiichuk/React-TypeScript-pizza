import { Wrapper } from '../Wrapper/Wrapper';
import './style.css';
import { LinkMenu } from '../LinkMenu/LinkMenu';
import { Box, Flex } from '@chakra-ui/react';
import { PizzaModal } from '../PizzaModal/PizzaModal';
import Pizza from '../../models/Pizza';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { EditPizzaForm } from '../EditPizzaForm/EditPizzaForm';

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
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const formatUADateTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('uk-UA', options).format(date);
};

export const AllProductsPage: React.FC<AllProductsPageProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  console.log(pizzasList);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const [additionalDescription, setAdditionalDescription] = useState<string>('');

  const additionalDescriptions: { [key: string]: string } = {
    '💥 Піца 3 Мяса':
      'Соус томатний, сир Моцарела, сир Пармезан, помідори, салямі, бекон, шинка, рукола',
    '💥 Піца Європейська':
      'Соус томатний, сир Моцарела, сир Пармезан, печериці свіжі, салямі, шинка, мисливські ковбаски, рукола',
    '💥 Піца 4 Сири': 'Вершковий соус, моцарела, фета, гауда, пармезан, рукола',
    '💥 Піца Цезар':
      'Соус вершковий, сир Моцарела, сир Пармезан, помідори, бекон, куряче філе, листя салату, соус Цезар',
    '💥 Піца Діабло': 'Соус томатний, сир Моцарела, сир Пармезан, салямі, перець Чілі, рукола',
    "💥 Піца Барбек'ю":
      "Соус томатний, сир Моцарела, сир Пармезан, фарш свино-гов'яжий, цибуля синя маринована, соус Барбек'ю, рукола",
    '💥 Піца Венеція':
      'Соус вершковий, сир Моцарела, сир Пармезан, крем сир Філадельфія, шинка, помідор, печериці свіжі, цибуля крнач, рукола',
    '💥 Піца Монтана':
      'Соус томатний, сир Моцарела, сир Пармезан, шинка, печериці мариновані, болгарський перець, кукурудза, рукола',
    '💥 Піца Фунгі':
      'Соус бешамель, сир Моцарела, сир Пармезан, куряче філе, печериці свіжі, рукола',
    '💥 Піца "БУМ"': 'Соус томатний, сир Моцарела, салямі, картопля Фрі, кетчуп.',
    '💥 Фіш & Чіпс': 'Рибні стріпси з морського окуня подаються з картоплею Фрі та соусом Тартар.',
    '💥 Чікен & Чіпс': 'Курячі стріпси подаються з картоплею Фрі та Кетчупом.',
    '💥 Цибулеві кільця New York': 'Подаються з соусом BBQ',
    '💥 Картопля Фрі': 'Подається із кетчупом',
    '💥 Картопля по-селянськи': 'Картопля, сало, цибуля',
    '💥 Салат Сантана (250г)':
      'Куряче філе, консервовані печериці, картопля, квашені огірки, варене яйце, цибуля, майонез',
    '💥 Салат з курки (250г)':
      'Куряче філе, картопля, морква, кукурудза, яблуко, перець болгарський, цибуля, майонез',
    '💥 Салат Каліфорнія (250г)':
      'Шинка, перець болгарський, маслини, сир, квашені огірки, цибуля, оливкова олія',
    '💥 Салат Грецький (250г)':
      'Помідори, огірки, перець болгарський, листя салату, цибуля, сир Фета, оливкова олія',
    '💥 Салат Проковтний язик (250г)': 'Язик, консервовані печериці, морква, кукурудза, майонез',
  };

  const openModalWithPizza = (pizza: Pizza) => {
    // додатковий опис на основі назви піци
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

  const [editStates, setEditStates] = useState<{ [id: number]: boolean }>({});

  const handleToggleEdit = (id: number) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [id]: !prevEditStates[id],
    }));
  };

  const handleToggleDelete = (id: number) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [id]: !prevEditStates[id],
    }));
  };

  const handleDelete = (id: number) => {
    deletePizza(id);
    handleToggleDelete(id);
  };

  const handleEdit = (id: number) => {
    //@ts-ignore
    updatePizza(id);
    handleToggleEdit(id);
  };

  return (
    <Wrapper>
      <Container maxW="1300px" centerContent marginBottom={'30px'}>
        <div className="heading-wrap">
          <div className="arrow-hover">
            <Link className="link-back" to="/">
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
                <CardBody padding={4}>
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
                        <TiInfoLargeOutline onClick={() => openModalWithPizza(pizza)} />
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
                        {/* <AiTwotoneEdit onClick={handleToggleEdit} /> */}
                        <AiTwotoneEdit onClick={() => handleToggleEdit(pizza.id)} />
                      </span>

                      {editStates[pizza.id] ? (
                        <div className="edit-windiw">
                          <EditPizzaForm
                            data={pizza}
                            //@ts-ignore
                            updatePizza={handleEdit}
                            handleToggleEdit={() => handleToggleEdit(pizza.id)}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className="price-wrap">
                      <span>
                        <Text color="orange" fontSize="2xl">
                          {Number(pizza.price).toFixed(2)} UAH
                        </Text>
                      </span>
                      <span className="info-icon info-icon--delete">
                        <MdDelete onClick={() => handleDelete(pizza.id)} />
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
          <LinkMenu
            to="/"
            imgSrc="/img/link/link10.webp"
            text="Формування Меню"
          />
          <LinkMenu
            to="#"
            imgSrc="/img/link/link12.webp"
            text="Магазини та подарунки"
          />
          <LinkMenu to="#" imgSrc="/img/link/link11.webp" text="Кур'єр" />
        </Flex>
      </Box>
      <PizzaModal
        isOpen={isOpen}
        onClose={onClose}
        pizza={selectedPizza}
        additionalDescription={additionalDescription}
      />
    </Wrapper>
  );
};

export default AllProductsPage;
