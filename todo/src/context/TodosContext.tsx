import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type Todo = {
    id: number,
    text: string,
    done: boolean,
};
//투두 하나는 {}, 배열로 모으기
type TodosState = Todo[];

//state context 생성
export const TodoStateContext = createContext<TodosState | null>(null);

//useReducer에 사용할 action 타입 명시
type Action = 
{type: "CREATE"; text: string} | {type: "EDIT"; id: number} | {type: "REMOVE"; id:number}

type TodoDispatch = Dispatch<Action>;
export const TodoDispatchContext = createContext<TodoDispatch | null>(null);

function todosReducer(state: TodosState, action: Action): TodosState{
    switch(action.type){
        case "CREATE":
            const nextId = Math.max(0, ...state.map(todo=> todo.id)) + 1;
            //기존 state에 합쳐줌
            return state.concat({
                id: nextId,
                text: action.text,
                done: false,
                 })
        case "EDIT":
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);

        case "REMOVE":
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error("정의되지않은 action")
    }
}

//reactNode => jsx요소 모두 사용가능
export function TodosContextProvider({children}:{children:React.ReactNode}) {
    const [todos, dispatch] = useReducer(todosReducer, []);

    return (
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoStateContext.Provider value={todos}>
                {children}
            </TodoStateContext.Provider>
        </TodoDispatchContext.Provider>
    )
}

// export function useTodosState(){
//     const state = useContext(TodoStateContext);
//     if(!state) throw new Error("에러")
//     return state;
// }

// export function useTodosDispatch(){
//     const dispatch = useContext(TodoDispatchContext);
//     if(!dispatch) throw new Error("에러")
//     return dispatch;
// }