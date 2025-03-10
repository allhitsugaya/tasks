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
        <form>
            <div style={{justifyContent:"center",alignItems:"center", display: 'flex'}}>
            <InputToDo inputValue={inputValue} setInputValue={setInputValue}/>
            <AddToDo inputValue={inputValue} setInputValue={setInputValue} />
            <ActionBtn label='Clear All' action='todo/clearAllToDo' message="All tasks have been cleared!" />
            </div>
            <List todo={todo}/>
        </form>
    )
}

export default FormTodo
