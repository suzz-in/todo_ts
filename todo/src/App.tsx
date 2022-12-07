import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TodosContextProvider } from './context/TodosContext'
import TodoForm from './components/TodoForm'

function App() {

  return (
   <TodosContextProvider>
    <TodoForm />
   </TodosContextProvider>
  )
}

export default App
