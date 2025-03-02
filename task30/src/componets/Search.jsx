import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../slices/userSlice.js";
import {clearUsers} from "../slices/swapiSlice.js";

function Search() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.swapi.users);
    const [query, setQuery] = useState('');

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
        dispatch(fetchRequest(query));
        // console.log('Dispatching fetchRequest with query:', query);
    }
    const clearAll = () =>{
        dispatch(clearUsers());
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">https://swapi.dev/api/</span>
                    <input type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" placeholder="people/1/" onChange={handleChange}
                           value={query}/>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Get info</button>
                </div>
            </form>
            <>
                <div className="form-floating">
                    <div className="form-control" id="floatingTextarea"
                         style={{height: '700px'}}>
            <pre>
                {JSON.stringify(users, null, 2)}
            </pre>
                    </div>
                </div>
            </>
            <button type='button' className='btn btn-warning' onClick={clearAll}>Clear All</button>
        </>
    )
}

export default Search;