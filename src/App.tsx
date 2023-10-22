import { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CardsProducts } from './components/CardsProducts/CardsProducts';
import { AllProductsPage } from './components/AllProductsPage/AllProductsPage';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Box, Center } from '@chakra-ui/react';
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
import './App.css';
import { Flex } from '@chakra-ui/react';

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
              <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <AddPizzaForm addPizza={addPizza} />
                <div className="link-wrapper-content">
                  <div className="link-wrapper">
                    <div className="link-svg">
                      <Link to="/all-products">
                        <div className="wrap-content">
                          <div className="shadow">
                            <div className="blob">
                              <div className="data">
                                <img src="../public/img/link/link1.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="title">
                            <span className="text">Меню</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="link-wrapper-link2">
                    <div className="link-svg">
                      <Link to="/all-products">
                        <div className="wrap-content">
                          <div className="shadow">
                            <div className="blob">
                              <div className="data">
                                <img src="../public/img/link/link2.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="title">
                            <span className="text">Меню</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="link-wrapper-link3">
                    <div className="link-svg">
                      <Link to="/all-products">
                        <div className="wrap-content">
                          <div className="shadow">
                            <div className="blob">
                              <div className="data">
                                <img src="../public/img/link/link2.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="title">
                            <span className="text">Меню</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Flex>
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
