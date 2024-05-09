import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    liked: []
}

const likedSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        addLiked: (state,action) =>{
            state.products.push(action.payload)
        },
        deleteLiked: (state, action) => {
            state.products = state.products.filter((item) => item.ids !== action.payload);
        }
    },
});

export const { addLiked, deleteLiked } = likedSlice.actions;
export default likedSlice.reducer;