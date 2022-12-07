import { useTodosState } from "../context/TodosContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useTodosState();
    return (<>
        {todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )}
    </>)
}

export default TodoList;