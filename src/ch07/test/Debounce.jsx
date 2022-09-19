import React from "react";
import { useState } from "react";

const debounce1 = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args); // cb(...args) ⇒ cb(100)
    };
};

const Debounce = () => {
    const [input, setInput] = useState("바보");

    const dbncStr = debounce1((input) => {
        setInput(input);
    }, 700);

    const onChangeInput = (event) => {
        event.preventDefault();
        dbncStr(event.target.value);
    };

    return (
        <div>
            <input onChange={onChangeInput} type="text" />

            <p>{input}</p>
        </div>
    );
};

export default Debounce;
