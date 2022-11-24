import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./store/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import Index from "./views/Index";
import About from "./views/About";
import Product from "./views/Product";
import Register from "./views/Register";
import Login from "./views/Login";
import HomeAdmin from "./views/admin/Home";
import CategoryAdmin from "./views/admin/Category";
import ErrorPage from "./views/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin/home",
        element: <HomeAdmin />,
    },
    {
        path: "admin-category",
        element: <CategoryAdmin />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <SnackbarProvider
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </SnackbarProvider>
    </React.StrictMode>
);
