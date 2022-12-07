
import { TodosContextProvider } from './context/TodosContext'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
   <TodosContextProvider>
    <TodoForm />
    <TodoList />
   </TodosContextProvider>
  )
}

export default App
