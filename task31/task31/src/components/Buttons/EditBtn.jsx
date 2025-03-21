import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {toast} from "react-toastify";

function EditBtn({index, todoS}) {
    const dispatch = useDispatch();
    const [text, setText] = useState(todoS);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        if(isEditing){
            dispatch({type: 'todo/editTodoAsync', payload: {index, text}})
            setIsEditing(false);
            toast.info("Successfully edited task.");
        }
        else setIsEditing(true);
    }

    return (
        <>
        {isEditing?(<input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>)
            : null}
            <button type='button' onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
        </>
    )
}

export default EditBtn
