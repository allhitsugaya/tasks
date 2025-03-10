import React from 'react'
import {toast} from "react-toastify";
import Input from "@mui/joy/Input";

function InputToDo({inputValue, setInputValue }) {
    const handleChange = (e) => {
       const value = e.target.value.trim();
       setInputValue(value);
    }
    const handleBlur = () => {
        if (!inputValue.length) {
            toast.error('Please enter a current task.');
            setInputValue('');
        }
    }
    return (
        <>
            <Input type="text" value={inputValue} onChange={handleChange} onBlur={handleBlur}/>
        </>
    )
}

export default InputToDo
