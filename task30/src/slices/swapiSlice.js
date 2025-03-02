import {createSlice} from '@reduxjs/toolkit';
import {fetchRequest} from './userSlice.js'

const initialState = {
    users: [],
    status: null,
    error: null,
};

const swapiSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearUsers: (state) => {
            state.users = initialState.users;
            state.error = initialState.error;
            state.status = initialState.status;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchRequest.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchRequest.fulfilled, (state, { payload }) => {
                state.status = "success";
                state.users = payload;
            })
            .addCase(fetchRequest.rejected, (state, { payload }) => {
                state.status = "error";
                state.error = payload;
            });
    }
})

export const {clearUsers} = swapiSlice.actions;
export default swapiSlice.reducer;

