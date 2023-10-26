import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    saved: []
};

export const newsSlice = createSlice({
    name: 'newsApi',
    initialState,
    reducers: {
        addSaved: (state, action) => {
            state.saved = [...state.saved, { ...action.payload}];
        },
        deleteSaved: (state, action) => {
            const newList = state.saved.filter((data) => data.url !== action.payload);
            state.saved = newList;
        },
        clearSaved: (state)=> {
            state.saved = []
        }
    },
})

export const { addSaved, deleteSaved,clearSaved } = newsSlice.actions;

export default newsSlice.reducer;