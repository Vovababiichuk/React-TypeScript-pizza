import { Wrapper } from '../Wrapper/Wrapper';
import './style.css';
import { LinkMenu } from '../LinkMenu/LinkMenu';


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

import { Grid, GridItem, Container } from '@chakra-ui/react';

interface AllProductsPageProps {
  pizzasList: Pizza[];
}

const formatUADateTime = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  return new Intl.DateTimeFormat('uk-UA', options).format(date);
};

export const AllProductsPage: React.FC<AllProductsPageProps> = ({ pizzasList }) => {
  console.log(pizzasList);

  return (
    <Wrapper>
      <Container maxW="1300px" centerContent>
      <span className="heading">Меню</span>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          {pizzasList.map((pizza) => (
            <Card maxW="sm" key={pizza.id}>
              <CardBody>
                <Image src={pizza.img} alt={pizza.title} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{pizza.title}</Heading>
                  <Text className="description">{pizza.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {pizza.price.toFixed(2)} UAH
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="orange">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
          
        </Grid>
      <LinkMenu to="/" imgSrc="../../../public/img/link/link1.png" text="Формування Меню" />
      </Container>
    </Wrapper>
  );
};

type Pizza = {
  id: number;
  title: string;
  price: number;
  img: string;
  category: string;
  description: string;
};

export default AllProductsPage;
