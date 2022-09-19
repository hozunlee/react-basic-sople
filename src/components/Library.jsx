import React from "react";
import Book from "./book";
import useStore from "../status/store";
// useStore를 통해 store의 값을 사용할 수 있다.
// use Store 훅으 ㄴ어떤 값을 가져올지 선택하는 셀렉터 함수를 인자로 받는다.

const Library = (props) => {
    const { isLogin, count, increase, toggleIsLogin, setCnt, clearCnt } =
        useStore();

    return (
        <div>
            {/* <Book name={"hojun"} numOfPage={300} />
            <Book name={"처음만나는 파이썬"} numOfPage={200} />
            <Book name={"자바스크립트 뿌시기"} numOfPage={100} /> */}
            <div>
                <p>{"" + isLogin}</p>
                <button onClick={toggleIsLogin}>
                    <b>버튼 클릭 시 백만원</b>
                </button>
            </div>
            <div>
                <div>현재 Cnt == {count}</div>
                <button onClick={increase}>[+1]</button>
                <button onClick={() => setCnt(10)}>[set_10]</button>
                <button onClick={clearCnt}>[clear]</button>
            </div>
        </div>
    );
};

export default Library;
