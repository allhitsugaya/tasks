import React, {useState} from 'react'
import InputToDo from "./InputToDo.jsx";
import List from "./List.jsx";
import AddToDo from "./AddToDo.jsx";
import {useSelector} from "react-redux";
import ClearBtn from "./ClearBtn.jsx";


function FormTodo() {
    const todo = useSelector((state) => state.todo.todos);
    const [inputValue , setInputValue] = useState('');
    return (
        <form>
            <div style={{justifyContent:"center",alignItems:"center", display: 'flex'}}>
            <InputToDo inputValue={inputValue} setInputValue={setInputValue}/>
            <AddToDo inputValue={inputValue} />
            <ClearBtn/>
            </div>
            <List todo={todo}/>
        </form>
    )
}

export default FormTodo
