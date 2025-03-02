import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './swapiSlice.js';

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    },
});
