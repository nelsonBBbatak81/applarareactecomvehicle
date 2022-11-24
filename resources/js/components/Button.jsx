import React from "react";

function Button({ children, classess, ...rest }) {
    return (
        <button
            className={`text-white text-md font-bold inline-flex items-center justify-center px-4 py-2 rounded-md shadow-md ${classess}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
