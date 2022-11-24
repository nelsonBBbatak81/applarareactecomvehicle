import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

export default configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
    },
});
