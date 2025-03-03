import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function UseSearch(selector, fetchAction, clearAction, initialState = '') {
    const dispatch = useDispatch();
    const users = useSelector(selector);
    const [query, setQuery] = useState(initialState);

    const handleChange = (e) => {
        setQuery(e.target.value);
        // console.log('Query updated:', e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            // console.log('Query is empty');
            return;
        }
        dispatch(fetchAction(query));
        // console.log('Dispatching fetchRequest with query:', query);
    }
    const clearAll = () =>{
        dispatch(clearAction());
    }
    return {
        users,
        handleSubmit,
        clearAll,
        handleChange,
        query
    }
}

export default UseSearch
