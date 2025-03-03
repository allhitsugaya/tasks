import FormData from './FormData.jsx'
import VisibleDta from "./VisibleDta.jsx";
import useSearch from "../hooks/useSearch.js"
import {fetchRequest} from "../slices/userThunk.js";
import {clearUsers} from "../slices/swapiSlice.js";

function Search() {
    const userSelector = (state) => state.swapi.users;
    const { users, query, handleChange, handleSubmit, clearAll } = useSearch(userSelector, fetchRequest, clearUsers,'');
    return (
        <>
            <FormData handleSubmit={handleSubmit} query={query} handleChange={handleChange}/>
             <VisibleDta clearAll={clearAll} users={users}/>
        </>
    )
}

export default Search;