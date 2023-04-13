import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import counterSlice from './slices/countSlice';
// import {counterSlice} from './slices/countSlice';

export const store = configureStore({
  reducer: {
    allMovies: moviesSlice,
    counter: counterSlice,
  },
})