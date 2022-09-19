import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCount from "./useCount";

const MAX_CAPACITY = 10;

const Accommodate = () => {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCount(0);

    useEffect(() => {
        console.log("================");
        console.log("is called");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div>
            <p style={{ padding: 16 }}>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}> 정원이 가득찼습니다.</p>}
        </div>
    );
};

export default Accommodate;
