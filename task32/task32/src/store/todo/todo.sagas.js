import { put, takeLatest, delay} from 'redux-saga/effects';
import {addTodo, editToDo, removeToDo} from "./todoSlice.js";
import {createAction} from "@reduxjs/toolkit";


export const addTodoAsync = createAction('todo/addTodoAsync');
export const removeTodoAsync = createAction('todo/removeTodoAsync');
export const editTodoAsync = createAction('todo/editTodoAsync');

function* addTodoSaga({ payload }){
    yield delay(1000);
    yield put(addTodo(payload));
}
function* removeTodoSaga({payload}){
    yield delay(1000);
    yield put(removeToDo(payload));
}
function* editTodoSaga({payload}){
    yield delay(1000);
    yield put(editToDo(payload));
}
function* todoSaga(){
    yield takeLatest(addTodoAsync.type, addTodoSaga);
    yield takeLatest(removeTodoAsync.type, removeTodoSaga);
    yield takeLatest(editTodoAsync.type, editTodoSaga);
}
export default todoSaga;