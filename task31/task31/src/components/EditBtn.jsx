import React from 'react'
import {useState} from 'react'
import {editToDo} from "../store/todoSlice.js";
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify";

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
        {isEditing?(<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>)
            : ( <span></span>)}
            <button type='button' onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
        </>
    )
}

export default EditBtn
