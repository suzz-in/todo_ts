import styled from "styled-components";
import { useTodosState } from "../hooks/useTodosState";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useTodosState();
    return (<ListWarp>
        {todos.length === 0 ? <span>오늘의 할 일을 입력해주세요😝</span> : todos.map((todo)=> <TodoItem todo={todo} key={todo.id}/> )}
    </ListWarp>)
}

export default TodoList;

const ListWarp = styled.div`
margin: 4vh auto auto auto ;
width : 70vw;
`