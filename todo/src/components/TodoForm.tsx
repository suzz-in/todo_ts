import React, { useState } from "react";
import styled from "styled-components";
import { useTodosDispatch } from "../hooks/useTodosDispatch";


const TodoForm = () => {
    const [input, setInput] = useState<string>("");
    const dispatch = useTodosDispatch();

    const onSubmit = (e : React.FormEvent)=>{
        e.preventDefault();
        dispatch({
            type:"CREATE",
            text: input,
        });
        setInput("");

    }
    return (<Form onSubmit={onSubmit}>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <Button>등록</Button>
    </Form>)
}

export default TodoForm;

const Form = styled.form`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
width: 50vw;
height: 5vh;
border-radius: 5px;
`

const Button = styled.button`
background-color : lightBlue;
margin-left: 10px;
height: 5vh;
`
