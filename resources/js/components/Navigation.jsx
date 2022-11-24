import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "./Dropdown";

function Navigation() {
    const [isHidden, setHidden] = useState("hidden");
    const isLoggIn = useSelector((state) => state.user.isLoggIn);
    const user = useSelector((state) => state.user.user);

    const btnMenuMobile = () => {
        if (isHidden === "hidden") {
            setHidden("block");
        } else {
            setHidden("hidden");
        }
    };

    return (
        <>
            <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/">Logo Bar</Link>
                </div>

                <label
                    for="menu-toggle"
                    className="pointer-cursor lg:hidden block"
                >
                    <svg
                        className="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input
                    className="hidden"
                    type="checkbox"
                    id="menu-toggle"
                    onClick={() => btnMenuMobile()}
                />

                <div
                    className={`${isHidden} lg:flex lg:items-center lg:w-auto w-full transition delay-150 duration-300 ease-in-out`}
                    id="menu"
                >
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                            <li>
                                <Link
                                    to="/"
                                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/product"
                                    className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                >
                                    Product
                                </Link>
                            </li>
                            {isLoggIn ? (
                                <>
                                    <li>
                                        <Link
                                            to="/admin/home"
                                            className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                                        >
                                            Admin
                                        </Link>
                                    </li>
                                    <li>
                                        <Dropdown user={user} />
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navigation;
