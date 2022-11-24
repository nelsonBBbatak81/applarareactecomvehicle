import React from "react";
import { Navigation } from "../components";

export default function GuestLayout({ children }) {
    return (
        <>
            <Navigation />
            <div className="py-5 max-w-4xl mx-auto">{children}</div>
        </>
    );
}
