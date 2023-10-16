import './App.css'
import { FC } from 'react'
import { AddPizzaForm } from './components/AddPizzaForm/AddPizzaForm'


const App: FC = () => {

  return (
    <>
      <div className='App'>
        <div className='wrap'>
          <span className='heading'>Our pizzeria</span>
          <AddPizzaForm />
        </div>
      </div>
    </>
  )
}

export default App
