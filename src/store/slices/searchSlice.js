import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searched: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        storeSearchValue: (state, action) => {
            state = {
                ...state,
                searched: action.payload
            }
            // console.log(state, action.payload)
        },
    },
})

export const { storeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;