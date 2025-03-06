import { put, takeLatest, delay} from 'redux-saga/effects';
import {addTodo, editToDo, removeToDo} from "./todoSlice.js";

function* addTodoAsync({ payload }){
    yield delay(1000);
    yield put(addTodo({payload}));
 }
 function* removeTodoAsync({payload}){
    yield delay(1000);
    yield put(removeToDo({payload}));
 }
 function* editTodoAsync({payload}){
    yield delay(1000);
    yield put(editToDo({payload}));
}
 function* todoSaga(){
    yield takeLatest('todo/addTodoAsync', addTodoAsync);
    yield takeLatest('todo/removeTodoAsync', removeTodoAsync);
    yield takeLatest('todo/editTodoAsync', editTodoAsync);
 }
 export default todoSaga;