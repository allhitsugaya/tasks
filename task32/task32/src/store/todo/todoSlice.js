import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState:{todos: []},
    reducers: {
        addTodo:  (state, {payload})=> {
            state.todos.push(payload)
        },
        removeToDo: (state, action) =>{
            state.todos = state.todos.filter((_, index) => index !== action.payload)
        },
        editToDo: (state, action) =>{
            const {index, text} = action.payload;
            state.todos[index] = text;
        },
        clearAllToDo: (state) =>{
            state.todos = [];
        }
    },

});
export const  {addTodo, removeToDo, editToDo, clearAllToDo} = todoSlice.actions;
export default todoSlice.reducer;