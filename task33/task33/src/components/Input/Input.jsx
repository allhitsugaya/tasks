import React from 'react'
import {useState} from 'react'
import ActionBtn from "../ActionBtn/ActionBtn.jsx";

function Input({todo, setTodo}) {
    const [value, setValue] = useState('');
    const handleClick = () => {
        setTodo([...todo, value]);
        setValue('');
    }
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    return (
        <>
            <input type="text" value={value} onChange={handleChange} />
            <ActionBtn onClick={handleClick} text={'Add'} />
        </>
    )
}

export default Input
