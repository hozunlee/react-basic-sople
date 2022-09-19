import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { rand } from "@lhz1230/utils/math-utils";
import { calendar } from "@lhz1230/utils/date-utils";

const Apple = () => {
    const [글제목, 글변경] = useState(["남자", "여자", "파이썬", "개그"]);
    const [modal, setModal] = useState(false);
    const [따봉, set따봉] = useState([]);
    const [title, setTitle] = useState(0);
    const [새로운글, 새로운글바꾸기] = useState();
    const [dis, setDis] = useState(true);

    const date = moment().format("YYYY.MM.DD HH:mm:ss");

    console.log(rand(1, 2));

    const OnclickSort = (event) => {
        event.preventDefault();
        let copy = [...글제목];
        글변경(copy.sort());
    };

    const Modal = ({ date, 글제목 }) => {
        return (
            <div>
                <h4>{글제목[title]}</h4>
                <p> 날짜 {date.format("YYYY-MM-DD")}</p>
                <p>상세내용</p>
                저는모달입니다.
                <button>글수정</button>
            </div>
        );
    };

    const 글삭제 = (idx, e) => {
        e.preventDefault();
        console.log(idx);
        let copy = [...글제목];
        copy.splice(idx, 1);
        글변경(copy);
    };

    const 글발행버튼 = (event) => {
        event.preventDefault();
        console.log(새로운글);
        let copy = [...글제목];
        copy.push(새로운글);
        글변경(copy);
        새로운글바꾸기(" ");
    };

    useEffect(() => {
        새로운글 && (새로운글.length > 3 ? setDis(false) : setDis(true));
    }, [새로운글]);

    return (
        <div>
            <p>{글제목[0]}</p>
            <button onClick={OnclickSort}>가나다라정렬</button>
            {글제목.map((item, idx) => {
                return (
                    <div key={idx}>
                        <div>
                            <button
                                onClick={() => {
                                    setTitle(idx);
                                    setModal(!modal);
                                }}
                            >
                                {item}
                                {idx}
                            </button>
                            <p
                                onClick={() => {
                                    const k = [...따봉];
                                    k[idx]
                                        ? (k[idx] = k[idx] + 1)
                                        : (k[idx] = 1);

                                    console.log(k);

                                    set따봉(k);
                                }}
                            >
                                따봉💃🏽{" "}
                            </p>
                            <span>{따봉[idx]}</span>
                            <button
                                onClick={(e) => {
                                    글삭제(idx, e);
                                }}
                            >
                                삭제버튼
                            </button>
                            <p>{date}</p>
                        </div>
                    </div>
                );
            })}
            {modal && <Modal date={date} 글제목={글제목} />}
            <div>
                <form action="submit">
                    <input
                        value={새로운글 || ""}
                        type="text"
                        onChange={(e) => 새로운글바꾸기(e.target.value)}
                    />
                    <button onClick={글발행버튼} disabled={dis}>
                        글발행
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Apple;
