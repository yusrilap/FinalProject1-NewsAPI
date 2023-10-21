import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

const initialState = {
    saved: []
};

export const newsSlice = createSlice({
    name: 'newsApi',
    initialState,
    reducers: {
        addSaved: (state, action) => {
            state.saved = [...state.saved, { ...action.payload, id: uuidv4() }];
        },
        deleteSaved: (state, action) => {
            const newList = state.saved.filter((data) => data.id !== action.payload);
            state.saved = newList;
        },
        clearSaved: (state)=> {
            state.saved = []
        }
    },
})

export const { addSaved, deleteSaved,clearSaved } = newsSlice.actions;

export default newsSlice.reducer;