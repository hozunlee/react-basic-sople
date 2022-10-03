import { useContext } from "react";

import ThemeContext from "./ThemeContext";

const MainContext = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log("ThemeContext :>> ", ThemeContext);
    return (
        <div
            className={
                "w-screen h-screen p-6 " +
                (theme === "light"
                    ? "bg-white text-black"
                    : "bg-black text-white")
            }
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
};

export default MainContext;
