import { Todo, useTodosDispatch } from "../context/TodosContext";


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
        <div>
            <span>{todo.id}</span>
            <p>{todo.text}</p>
            
        </div>
    )
}

export default TodoItem;