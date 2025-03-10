import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.js";
import todoSaga from "./todo.sagas.js";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware:getDefaultMiddleware=> [...getDefaultMiddleware({thunk: false, serializableCheck: false}), sagaMiddleware],
});
sagaMiddleware.run(todoSaga);

export default store;