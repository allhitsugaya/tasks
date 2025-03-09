import React from 'react'
import {toast} from "react-toastify";
import {clearAllToDo} from '../../store/todoSlice.js'
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";

function ClearBtn() {
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(clearAllToDo())
        toast.info('All tasks have been cleared!')
    }
    return (
        <Button type='button' onClick={handleClick}>Clear</Button>
    )
}

export default ClearBtn
