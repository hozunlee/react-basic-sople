import React, { useCallback, useState } from "react";

import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

const DarkOrLight = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContext />
        </ThemeContext.Provider>
    );
};

export default DarkOrLight;
