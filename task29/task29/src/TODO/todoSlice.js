import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState:{todos: []},
    reducers: {
        addTodo:  (state, {payload})=> {
            state.todos.push(payload)
        }
        },
});
export const  {addTodo} = todoSlice.actions;
export default todoSlice.reducer;