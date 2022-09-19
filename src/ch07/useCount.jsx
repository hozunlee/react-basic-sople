import React, { useState } from "react";

const useCount = (init) => {
    const [count, setCount] = useState(init);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
};

export default useCount;
