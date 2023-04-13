import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searched: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        storeSearchValue: (state, action) => {
            state.searched = action.payload
        },
    },
})

export const { storeSearchValue } = searchSlice.actions;

export default searchSlice.reducer;