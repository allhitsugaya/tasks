import { put, takeEvery, delay} from 'redux-saga/effects';
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
    yield takeEvery('todo/addTodoAsync', addTodoAsync);
    yield takeEvery('todo/removeTodoAsync', removeTodoAsync);
    yield takeEvery('todo/editTodoAsync', editTodoAsync);
 }
 export default todoSaga;