import React from "react";
import GuestLayout from "../layouts/GuestLayout";

export default function Index() {
    return (
        <>
            <GuestLayout>
                <h1 className="text-3xl bg-cyan-600 text-red-500">Home page</h1>
                <p className="text-white text-md font-bold py-2 px-2 bg-slate-800">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi quam quidem doloremque perspiciatis aperiam illo
                    aliquid et explicabo soluta dolore!
                </p>
            </GuestLayout>
        </>
    );
}
