import React from 'react'
import {addTodo} from "../../store/todoSlice.js";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import Button from "@mui/material/Button";

function AddToDo({inputValue}) {
    const dispatch = useDispatch();
    const handleAddToDo = () =>{
        if(inputValue.length < 1){
            toast.error("Please enter a current task.");
            return;
        }
        dispatch(addTodo(inputValue));
        toast.success('Adding successfully.');
    }
    return (
        <Button type='button' onClick={handleAddToDo}>Add</Button>
    )
}

export default AddToDo
