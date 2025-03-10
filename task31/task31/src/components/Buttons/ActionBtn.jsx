import React from 'react'
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";


function ActionBtn({label, action, payload, message}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: action, payload });
        toast.info(message);
    };
    return (
     <button type="button" onClick={handleClick}>{label}</button>
    );
}

export default ActionBtn
