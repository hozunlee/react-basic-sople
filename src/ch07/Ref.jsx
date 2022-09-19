import React, { useRef } from "react";

const Ref = () => {
    const inputElem = useRef(null);
    console.log("🚀 ~ file: Ref.jsx ~ line 5 ~ Ref ~ inputElem", inputElem);

    const onButtonClick = () => {
        // current는 마운트된 input element를 가르킴
        inputElem.current.focus();
    };

    return (
        <div>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
};

export default Ref;
