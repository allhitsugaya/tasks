import React, {useState} from 'react'
import InputToDo from "../Input/InputToDo.jsx";
import List from "../List/List.jsx";
import AddToDo from "../Buttons/AddToDo.jsx";
import {useSelector} from "react-redux";
import ActionBtn from "../Buttons/ActionBtn.jsx";


function FormTodo() {
    const todo = useSelector((state) => state.todo.todos);
    const [inputValue , setInputValue] = useState('');
    return (
        <form >
            <InputToDo inputValue={inputValue} setInputValue={setInputValue}/>
            <AddToDo inputValue={inputValue} setInputValue={setInputValue} />
            <ActionBtn label='ClearAll' action='todo/clearAllToDo' message="All tasks have been cleared!" />
            <List todo={todo}/>
        </form>
    )
}

export default FormTodo
