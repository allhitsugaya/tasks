import React, {useState} from 'react'
import DeleteBtn from "./DeleteBtn.jsx";
import EditBtn from "./EditBtn.jsx";
import {toast} from "react-toastify";


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
                todo.map((todoS, index) => <p key={index}><input type="checkbox" onChange={handleChange}/>{todoS} <EditBtn todoS={todoS} index={index}/> <DeleteBtn index={index}/></p>)
            ) : (
                <p>No todos yet</p>
            )}
        </h3>
        </>
    )
}

export default List
