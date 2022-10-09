import React from "react";

const TextInput = ({ height, value, onChange }) => {
    return (
        <div>
            <textarea
                value={value}
                onChange={onChange}
                className={`text-base p-4 leading-4 w-2/3  h-[${height}px] `}
            />
        </div>
    );
};

export default TextInput;
