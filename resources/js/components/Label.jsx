import React from "react";

function Label({ value }) {
    return (
        <label htmlFor={value} className="text-md font-bold text-black mb-1">
            {value}
        </label>
    );
}

export default Label;
