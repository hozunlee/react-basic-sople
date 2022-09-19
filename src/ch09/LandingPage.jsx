import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogIn = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogIn={onClickLogIn}
                onClickLogout={onClickLogout}
            />
            <div className="p-4">소플과 함께하는 리액트 공부!</div>
        </>
    );
};

export default LandingPage;
