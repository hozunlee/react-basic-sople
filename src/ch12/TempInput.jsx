import React from "react";
const scaleNames = {
    c: "섭씨",
    f: "화씨",
};
const TempInput = ({ scale, temperature, onTemperatureChange }) => {
    const handleChange = (e) => {
        onTemperatureChange(e.target.value);
    };

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[scale]})</legend>
            <input type="text" value={temperature} onChange={handleChange} />
        </fieldset>
    );
};

export default TempInput;
