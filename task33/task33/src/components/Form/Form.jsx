import React, {useState} from 'react'
import Input from "../Input/Input.jsx";
import List from "../List/List.jsx";
import ActionBtn from "../ActionBtn/ActionBtn.jsx";

function Form() {
    const [todo, setTodo] = useState([]);
    const handleClick = () =>{
        setTodo([]);
    }
    return (
        <form>
            <h2>TodoList with Jest</h2>
            <Input setTodo={setTodo} todo={todo}/>
            <List todo={todo}/>
            <ActionBtn onClick={handleClick} text={'ClearAll'}/>
        </form>
    )
}

export default Form
