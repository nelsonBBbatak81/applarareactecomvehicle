import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: localStorage.getItem("categories")
            ? JSON.parse(localStorage.getItem("categories"))
            : [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        removeCategories: (state) => {
            state.categories = [];
        },
    },
});

export const { setCategories, removeCategories } = categorySlice.actions;
export default categorySlice.reducer;
