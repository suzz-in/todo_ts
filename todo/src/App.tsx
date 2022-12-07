
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
