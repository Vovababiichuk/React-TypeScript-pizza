import { FC, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CardsProducts } from './components/CardsProducts/CardsProducts';
import { AllProductsPage } from './components/AllProductsPage/AllProductsPage';
import { Wrapper } from './components/Wrapper/Wrapper';
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm';
import './App.css';
import { motion } from 'framer-motion';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';

import { BsFastForwardBtnFill } from 'react-icons/bs';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const containerStyle = {
    overflow: 'hidden',
  };

  return (
    <Router>
      <Routes>
        <Route path="/all-products" element={<AllProductsPage pizzasList={pizzasList} />} />
        <Route path="/pizza/:id" element={<CardsProducts pizza={pizzasList[0]} />} />
        <Route
          path="/"
          element={
            <Wrapper style={containerStyle}>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.0 }}>
                <div className="heading-arrow">
                  <Link className="link-foward" to="/all-products">
                    <span>Меню</span>
                    <span className="heading-icon">
                      <BsFastForwardBtnFill />
                    </span>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.0 }}>
                <span className="heading">Формування Меню</span>
              </motion.div>
              <div className="link-wrap-main">
                <motion.div
                  initial={{ opacity: 0, y: 800 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  >
                  <AddPizzaForm addPizza={addPizza} />
                  </motion.div>

                <div className="link-wrapper-content">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 900 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        // opacity: { duration: 1.0, delay: 0.5 }, // Затримка 0.5 секунди та тривалість 1 секунда для прозорості
                        x: { duration: 0.8, delay: 1.7 }, // Затримка 0.2 секунди та тривалість 0.8 секунди для зміщення по осі Y
                      }}>
                      <div className="link-wrapper">
                        <div className="link-svg">
                          <Link to="/all-products">
                            <div className="wrap-content">
                              <div className="shadow">
                                <div className="blob">
                                  <div className="data">
                                    <img
                                      className="img-link-app"
                                      src="../public/img/link/link1.png"
                                      alt=""
                                    />
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
                    </motion.div>
                  </div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 900 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        // opacity: { duration: 1.0, delay: 0.5 }, // Затримка 0.5 секунди та тривалість 1 секунда для прозорості
                        x: { duration: 0.8, delay: 1.6 }, // Затримка 0.2 секунди та тривалість 0.8 секунди для зміщення по осі Y
                      }}>
                      <Popover>
                        <PopoverTrigger>
                          <div className="link-wrapper-link2">
                            <div className="link-svg">
                              {/* <Link to="/all-products"> */}
                              <div className="wrap-content">
                                <div className="shadow">
                                  <div className="blob">
                                    <div className="data">
                                      <img
                                        className="img-link-app"
                                        src="../public/img/link/link2.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="title">
                                  <span className="text">Послуги</span>
                                </div>
                              </div>
                              {/* </Link> */}
                            </div>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverHeader fontWeight="semibold">Приносимо вибачення!</PopoverHeader>
                          <PopoverArrow bg="pink.500" />
                          <PopoverCloseButton bg="purple.500" />
                          <PopoverBody>
                            Даний розділ все ще в процесі розробки і не доступний для використання.
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </motion.div>
                  </div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 900 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        // opacity: { duration: 1.0, delay: 0.5 }, // Затримка 0.5 секунди та тривалість 1 секунда для прозорості
                        x: { duration: 0.8, delay: 1.5 }, // Затримка 0.2 секунди та тривалість 0.8 секунди для зміщення по осі Y
                      }}>
                      <Popover>
                        <PopoverTrigger>
                          <div className="link-wrapper-link3">
                            <div className="link-svg">
                              {/* <Link to="/all-products"> */}
                              <div className="wrap-content">
                                <div className="shadow">
                                  <div className="blob">
                                    <div className="data">
                                      <img
                                        className="img-link-app"
                                        src="../public/img/link/link4.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="title">
                                  <span className="text">Доставка</span>
                                </div>
                              </div>
                              {/* </Link> */}
                            </div>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverHeader fontWeight="semibold">Приносимо вибачення!</PopoverHeader>
                          <PopoverArrow bg="pink.500" />
                          <PopoverCloseButton bg="purple.500" />
                          <PopoverBody>
                            Даний розділ все ще в процесі розробки і не доступний для використання.
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </motion.div>
                  </div>
                </div>
              </div>
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
