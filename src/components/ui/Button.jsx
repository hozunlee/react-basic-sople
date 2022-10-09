import React from "react";

const Button = ({ title, onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className="px-4 py-2 text-base border rounded-lg cursor-pointer"
            >
                {title || "button"}
            </button>
        </>
    );
};

export default Button;
