import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice.js";
import todoSaga from "./todo/todo.sagas.js";
import createSagaMiddleware from 'redux-saga';
import swapiReducer from "./swapi/swapiSlice.js";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        todo: todoReducer,
        swapi: swapiReducer
    },
    middleware:getDefaultMiddleware=> [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(todoSaga);

export default store;