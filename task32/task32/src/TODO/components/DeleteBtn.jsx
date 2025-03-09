import React from 'react'
import {removeToDo} from "../../store/todoSlice.js";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import Button from "@mui/material/Button";

function DeleteBtn({index}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeToDo(index))
        toast.info('Successfully deleted task.')
    }
    return (
        <Button size="md" onClick={handleDelete}>Delete</Button>
    )
}

export default DeleteBtn