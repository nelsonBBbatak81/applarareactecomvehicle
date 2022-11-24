import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/auth";
import { Spinner } from "../components";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
    const { signOut, isLoading } = useAuth();
    const user = useSelector((state) => state.user.user);

    return (
        <div className="w-full flex">
            <div className="w-1/4 flex flex-col py-6 px-3 bg-stone-600">
                <Link to="/">
                    <h1 className="text-4xl text-white font-bold mb-10 text-uppercase">
                        Logo Bar
                    </h1>
                </Link>
                <p className="text-lg font-bold text-center text-white mb-5">
                    {user.email}
                </p>
                <div className="flex flex-col justify-start">
                    <Link
                        to="/admin/home"
                        className="px-2 py-2 text-white text-md font-bold rounded-md hover:bg-stone-100 hover:text-black"
                    >
                        Home
                    </Link>
                    <Link
                        to="/admin-category"
                        className="px-2 py-2 text-white text-md font-bold rounded-md hover:bg-stone-100 hover:text-black"
                    >
                        Category
                    </Link>
                    <Link
                        to="/admin/home"
                        className="px-2 py-2 text-white text-md font-bold rounded-md hover:bg-stone-100 hover:text-black"
                    >
                        Brand
                    </Link>
                    <Link
                        to="/admin/home"
                        className="px-2 py-2 text-white text-md font-bold rounded-md hover:bg-stone-100 hover:text-black"
                    >
                        Product
                    </Link>
                    <a
                        onClick={signOut}
                        className="px-2 py-2 text-white text-md font-bold rounded-md hover:bg-stone-100 hover:text-black"
                    >
                        Sign Out
                    </a>
                </div>
            </div>
            {isLoading && <Spinner />}
            <div className="w-full px-3 py-6 bg-white">{children}</div>
        </div>
    );
}
