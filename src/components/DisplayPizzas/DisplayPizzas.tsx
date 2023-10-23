import React, { FC } from 'react';
import { Box, Image, Select } from '@chakra-ui/react';
import './style.css';

import { Link } from 'react-router-dom';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
 console.log(pizzasList);

  return (
    <div>
      {pizzasList.map((pizza) => (
        <div key={pizza.id}>
          <Link to={`/pizza/${pizza.id}`}>
            <button>Перейти до {pizza.title}</button>
          </Link>
        </div>
      ))}
    </div>
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

export default DisplayPizzas;
