import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {key: 'value'},
    {key: 'value'},
    {key: 'value'},
    {key: 'value'}
];

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state = [
                ...state,
                action.payload
            ]
        },
    },
})

export const { addMovies } = moviesSlice.actions

export default moviesSlice.reducer