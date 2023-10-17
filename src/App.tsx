import './App.css'
import { FC, useState } from 'react'
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm'
import Pizza from './models/Pizza'


const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  console.log(pizzasList)

  return (
    <>
      <div className='App'>
        <div className='wrap'>
          <span className='heading'>Our pizzeria</span>
          <AddPizzaForm 
            addPizza={addPizza}
          />
        </div>
      </div>
    </>
  )
}

export default App
