import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    saved: []
}

const savedSlice = createSlice({
    name: 'saved',
    initialState,
    reducers: {
        addSaved: (state,action) =>{
            state.products.push(action.payload)
        },
        deleteSaved: (state, action) => {
            state.products = state.products.filter((item) => item.ids !== action.payload);
        }
    },
});

export const { addSaved, deleteSaved } = savedSlice.actions;
export default savedSlice.reducer;