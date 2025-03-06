import React from 'react'
import {removeToDo} from "../store/todoSlice.js";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

function DeleteBtn({index}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeToDo(index))
        toast.info('Successfully deleted task.')
    }
    return (
        <button type='button' onClick={handleDelete}>Delete</button>
    )
}

export default DeleteBtn
