import styled from "styled-components";
import { Todo } from "../context/TodosContext";
import { useTodosDispatch } from "../hooks/useTodosDispatch";


export type TodoProps = {
    todo: Todo
}

const TodoItem = ({todo} : TodoProps) => {

    const dispatch = useTodosDispatch();

    const onCheck = () => {
        dispatch({
            type:"EDIT",
            id: todo.id,
        })
    }

    const remove = () =>{
        dispatch({
            type:"REMOVE",
            id: todo.id
        })
    }

    return (
        <Container>
            <input type='checkbox' checked={todo.done} onChange={onCheck}/>
            <span>{todo.id}</span>
            <p>{todo.text}</p>
            <button onClick={remove}>삭제</button>
        </Container>
    )
}

export default TodoItem;

const Container = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 0.3fr 0.5fr 2fr 0.5fr;
background-color: lightBlue;
border-radius: 10px;
width: 70vw;


 span {
    margin: 10px;
    color: grey;
 }

 button {
    width: 8vw;
    font-size: 0.7rem;
 }

`