import React from "react";

const Toolbar = ({ isLoggedIn, onClickLogIn, onClickLogout }) => {
    return (
        <div className="flex p-4 flex-row border-b-2 ">
            {isLoggedIn && (
                <span className="mr-2 text-center text-blue-300">
                    환영합니다
                </span>
            )}

            {isLoggedIn ? (
                <button onClick={onClickLogout}> 로그인</button>
            ) : (
                <button onClick={onClickLogIn}> 로그아웃</button>
            )}
        </div>
    );
};

export default Toolbar;
