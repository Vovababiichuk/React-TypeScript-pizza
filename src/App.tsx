import './App.css';
import { chakra } from '@chakra-ui/react';
import { Wrapper } from './components/Wrapper/Wrapper';
import { FC, useState } from 'react';
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
import Pizza from './models/Pizza';
import DisplayPizzas from './components/DisplayPizzas/DisplayPizzas';
import { Input, Stack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';
import { Center, Container } from '@chakra-ui/react';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  console.log(pizzasList);

  return (
    <>
      <Wrapper>
        <span className="heading">Формування Меню</span>
          <Center>
            <AddPizzaForm addPizza={addPizza} />
            {/* <DisplayPizzas pizzasList={pizzasList} /> */}
          </Center>
      </Wrapper>
    </>
  );
};

export default App;
