import React from 'react'
import {toast} from "react-toastify";
import {clearAllToDo} from '../store/todoSlice.js'
import {useDispatch} from "react-redux";

function ClearBtn() {
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(clearAllToDo())
        toast.info('All tasks have been cleared!')
    }
    return (
        <button type='button' onClick={handleClick}>Clear</button>
    )
}

export default ClearBtn
