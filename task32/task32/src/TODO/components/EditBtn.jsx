import React from 'react'
import {useState} from 'react'
import {editToDo} from "../../store/todoSlice.js";
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify";
import Button from "@mui/material/Button";
import Input from "@mui/joy/Input";

function EditBtn({index, todoS}) {
    const dispatch = useDispatch();
    const [text, setText] = useState(todoS);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        if(isEditing){
            dispatch(editToDo({index, text}));
            setIsEditing(false);
            toast.info("Successfully edited task.");
        }
        else setIsEditing(true);
    }

    return (
        <>
        {isEditing?(<Input size="md" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>)
            : ( <span></span>)}
            <Button type='button' onClick={handleEdit}>{isEditing?'Save':'Edit'}</Button>
        </>
    )
}

export default EditBtn
