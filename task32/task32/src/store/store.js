import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import todoSaga from "./todosagas.js";
import createSagaMiddleware from 'redux-saga';
import swapiReducer from "./swapiSlice.js";

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