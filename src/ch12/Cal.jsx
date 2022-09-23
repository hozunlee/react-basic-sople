import React from "react";
import { useState } from "react";
import TempInput from "./TempInput";

const BoilingVerdict = ({ celsius }) => {
    if (celsius >= 100) {
        return <p>끓습니다 물이 끓습니다</p>;
    }
    return <p>샤워 쌉가능 물... 안끓어 </p>;
};

const toCelsius = (fahgreheit) => {
    return ((fahgreheit - 32) * 5) / 9;
};

const toFahgreheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

const Cal = () => {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahgreheit =
        scale === "c" ? tryConvert(temperature, toFahgreheit) : temperature;

    return (
        <div>
            <TempInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TempInput
                scale="f"
                temperature={fahgreheit}
                onTemperatureChange={handleFahrenheitChange}
            />

            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
};

export default Cal;
