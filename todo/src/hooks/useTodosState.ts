import { useContext } from "react";
import { TodoStateContext } from "../context/TodosContext";

export function useTodosState(){
    const state = useContext(TodoStateContext);
    if(!state) throw new Error("에러")
    return state;
}