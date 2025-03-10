import React, {useState} from 'react'
import EditBtn from "../Buttons/EditBtn.jsx";
import {toast} from "react-toastify";
import {nanoid} from "nanoid";
import ActionBtn from "../Buttons/ActionBtn.jsx";

function List({todo}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        if(isChecked){
            toast.success('Task successfully completed')
        }
        setIsChecked(!isChecked)
    }
    return (
        <>
            <h3>
            {todo.length > 0 ? (
                todo.map((todoS, index) => <p key={nanoid()}><input type="checkbox" onChange={handleChange}/>{todoS} <EditBtn todoS={todoS} index={index}/> <ActionBtn label='Delete' message='Successfully deletes task' action='todo/removeTodoAsync' payload={index} /></p>)
            ) : (
                <p>No todos yet</p>
            )}
        </h3>
        </>
    )
}

export default List
