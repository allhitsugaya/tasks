import {addTodo} from "./todoSlice.js";
import {useSelector , useDispatch} from 'react-redux'
import {useState} from "react";


const Todo = () => {
    const todo = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [inputValue , setInputValue] = useState('');

    return (
        <>
            <form action="">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type='button' onClick={() => dispatch(addTodo(inputValue))}>Add</button>
                <button type='button' onClick={()=> setInputValue('')}>Clear</button>
            </form>
            <h3>
                {todo.length > 0 ? (
                    todo.map((todoS, index) => <p key={index}>{todoS}</p>)
                ) : (
                    <p>No todos yet</p>
                )}
            </h3>
            <h3>The num of todos now is {todo.length}</h3>
        </>
    )
}
export default Todo
