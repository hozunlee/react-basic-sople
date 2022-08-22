import React from "react";
import Book from "./book";

const Library = (props) => {
    const Button = (props) => {
        return (
            <button>
                <b>{props.children}</b>
            </button>
        );
    };

    return (
        <div>
            <Book name={"hojun"} numOfPage={300} />
            <Book name={"처음만나는 파이썬"} numOfPage={200} />
            <Book name={"자바스크립트 뿌시기"} numOfPage={100} />
            <Button>확인</Button>
        </div>
    );
};

export default Library;
