import React from 'react'
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import Button from "@mui/material/Button";


function ActionBtn({label, action, payload, message}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: action, payload });
        toast.info(message);
    };
    return (
     <Button type="button" onClick={handleClick}>{label}</Button>
    );
}

export default ActionBtn
