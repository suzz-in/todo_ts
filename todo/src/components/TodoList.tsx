import { useTodosState } from "../context/TodosContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useTodosState();
    return (<>
        {todos.length === 0 ? <span>오늘의 할 일을 입력해주세요😝</span> : todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )}
    </>)
}

export default TodoList;