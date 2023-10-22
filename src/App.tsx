// import './App.css';
// import { chakra } from '@chakra-ui/react';
// import { Wrapper } from './components/Wrapper/Wrapper';
// import { FC, useState } from 'react';
// import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
// import Pizza from './models/Pizza';
// import { DisplayPizzas } from './components/DisplayPizzas/DisplayPizzas';
// import { Input, Stack } from '@chakra-ui/react';
// import { Box } from '@chakra-ui/react';
// import { Select } from '@chakra-ui/react';
// import { MdArrowDropDown } from 'react-icons/md';
// import { Center, Container } from '@chakra-ui/react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CardsProducts } from './components/CardsProducts/CardsProducts';

// const App: FC = () => {
//   const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

//   const addPizza = (newPizza: Pizza) => {
//     setPizzasList([...pizzasList, newPizza]);
//   };

//   console.log(pizzasList);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/pizza/:id" component={CardsProducts} /> {/* Маршрут для сторінки піци */}
//         <Wrapper>
//           <span className="heading">Формування Меню</span>
//           <Center>
//             <AddPizzaForm addPizza={addPizza} />
//             <DisplayPizzas pizzasList={pizzasList} />
//           </Center>
//         </Wrapper>
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//=====================


// import './App.css';
// import { chakra } from '@chakra-ui/react';
// import { Wrapper } from './components/Wrapper/Wrapper';
// import { FC, useState } from 'react';
// import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
// import Pizza from './models/Pizza';
// import { DisplayPizzas } from './components/DisplayPizzas/DisplayPizzas';
// import { Input, Stack } from '@chakra-ui/react';
// import { Box } from '@chakra-ui/react';
// import { Select } from '@chakra-ui/react';
// import { MdArrowDropDown } from 'react-icons/md';
// import { Center, Container } from '@chakra-ui/react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CardsProducts } from './components/CardsProducts/CardsProducts';

// import { AllProductsPage } from './components/AllProductsPage/AllProductsPage';

// import { Link } from 'react-router-dom';


// const App: FC = () => {
//   const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

//   const addPizza = (newPizza: Pizza) => {
//     setPizzasList([...pizzasList, newPizza]);
//   };

//   console.log(pizzasList);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/pizza/:id" element={<CardsProducts pizza={pizzasList[0]} />} />{' '}
//         <Route path="/all-products" element={<AllProductsPage pizzasList={pizzasList} />} />

//         {/* Маршрут для сторінки піци */}
//         <Route
//           path="/"
//           element={
//             <Wrapper>
//               <span className="heading">Формування Меню</span>
//               <Center>
//                 <AddPizzaForm addPizza={addPizza} />
//                 <Link to="/all-products">Перейти до всіх продуктів</Link>{' '}
//                 {/* Посилання на сторінку з усіма продуктами */}
//               </Center>
//             </Wrapper>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//=================================



// import React, { FC, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CardsProducts } from './components/CardsProducts/CardsProducts';
// import { AllProductsPage } from './components/AllProductsPage/AllProductsPage';
// import { Wrapper } from './components/Wrapper/Wrapper';
// import { Center } from '@chakra-ui/react';
// import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
// import { Link } from 'react-router-dom';




// const App: FC = () => {
//   const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

//   const addPizza = (newPizza: Pizza) => {
//     setPizzasList([...pizzasList, newPizza]);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/pizza/:id" element={<CardsProducts pizza={pizzasList[0]} />} />
//         <Route path="/all-products" element={<AllProductsPage pizzasList={pizzasList} />} />
//         <Route
//           path="/"
//           element={
//             <Wrapper>
//               <span className="heading">Формування Меню</span>
//               <Center>
//                 <AddPizzaForm addPizza={addPizza} />
//                 <Link to="/all-products">Перейти до всіх продуктів</Link>
//               </Center>
//             </Wrapper>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//===============================

import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CardsProducts } from './components/CardsProducts/CardsProducts';
import { AllProductsPage } from './components/AllProductsPage/AllProductsPage';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Center } from '@chakra-ui/react';
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
import './App.css';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/all-products" element={<AllProductsPage pizzasList={pizzasList} />} />
        <Route path="/pizza/:id" element={<CardsProducts pizza={pizzasList[0]} />} />
        <Route
          path="/"
          element={
            <Wrapper>
              <span className="heading">Формування Меню</span>
              <Center>
                <AddPizzaForm addPizza={addPizza} />
                <Link to="/all-products">Перейти до всіх продуктів</Link>
              </Center>
            </Wrapper>
          }
        />
      </Routes>
    </Router>
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

export default App;
