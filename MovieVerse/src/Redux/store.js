import { configureStore } from '@reduxjs/toolkit';
import likedReducer from './likedSlice'
import savedReducer from './savedSlice'

export const store = configureStore({
    reducer: {
        liked: likedReducer,
        saved: savedReducer
    },
});