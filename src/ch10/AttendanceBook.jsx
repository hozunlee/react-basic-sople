import React from "react";

const students = [
    { id: 1, name: "hojun" },
    { id: 2, name: "ham" },
    { id: 3, name: "yo" },
    { id: 4, name: "lee" },
];

const AttendanceBook = () => {
    return (
        <div>
            <ul>
                {students.map((st) => {
                    return <li key={st.id}>{st.name}</li>;
                })}
            </ul>
        </div>
    );
};

export default AttendanceBook;
