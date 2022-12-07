import { useContext } from "react";
import { TodoDispatchContext } from "../context/TodosContext";

export function useTodosDispatch(){
    const dispatch = useContext(TodoDispatchContext);
    if(!dispatch) throw new Error("에러")
    return dispatch;
}