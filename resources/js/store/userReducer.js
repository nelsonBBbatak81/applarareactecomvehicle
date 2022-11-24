import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : {},
        isLoggIn: localStorage.getItem("token") ? true : false,
    },
    reducers: {
        setAuth: (state, action) => {
            state.isLoggIn = action.payload;
        },
        removeAuth: (state) => {
            state.isLoggIn = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = {};
        },
    },
});

export const { setUser, removeUser, setAuth, removeAuth } = userSlice.actions;
export default userSlice.reducer;
