import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchRequest = createAsyncThunk('people/fetchUsers',
    async ( query , { signal, rejectWithValue, dispatch }) => {
        try {
            const url =  `https://swapi.dev/api/${query}`
            const response = await fetch(url, {signal});
            const data = await response.json();
            return data;
        }
        catch (error) {
           return rejectWithValue(error.message ?? 'Unknown error');
        }
    })
