import React from "react";

function Input({ ...rest }) {
    return (
        <input
            className="text-md px-2 py-2 border border-solid border-slate-200 rounded-md shadow-md hover:border-slate-500 focus:border-slate-500"
            {...rest}
        />
    );
}

export default Input;
