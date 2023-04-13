import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import searchSlice from './slices/searchSlice';
// import {counterSlice} from './slices/countSlice';

export const store = configureStore({
  reducer: {
    allMovies: moviesSlice,
    searchValue: searchSlice
  },
})