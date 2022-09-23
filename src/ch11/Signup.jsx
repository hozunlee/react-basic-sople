import React from "react";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [gender, getGender] = useState("남자");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeGender = (e) => {
        getGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`이름 : ${name} ${gender}`);
        setName("");
    };

    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="">
                    이름:
                    <input
                        type="text"
                        value={name}
                        onChange={handleChangeName}
                    />
                </label>
                <br />
                <label htmlFor="">
                    성별:
                    <select value={gender} onChange={handleChangeGender}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <button type="submit">제출</button>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={"텍스트"}
                ></textarea>
            </form>
        </div>
    );
};

export default Signup;
