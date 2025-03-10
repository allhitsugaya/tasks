import React from 'react'
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import Button from "@mui/material/Button";

function AddToDo({inputValue, setInputValue}) {
    const dispatch = useDispatch();
    const handleAddToDo = () =>{
        if(inputValue.length < 1){
            toast.error("Please enter a current task.");
            return;
        }
        dispatch({type: 'todo/addTodoAsync', payload: inputValue});
        toast.success('Adding successfully.');
        setInputValue('');
    }
    return (
        <Button type='button' onClick={handleAddToDo}>Add</Button>
    )
}

export default AddToDo
