import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김민재",
        comment: "안녕하쎕쎄리요",
    },
    {
        name: "손흥민",
        comment: "스왈로브스킬",
    },
    {
        name: "이강인",
        comment: "와따시와",
    },
];

const CommentList = (props) => {
    return (
        <div>
            {comments.map((item, idx) => {
                return (
                    <div key={idx}>
                        <Comment
                            name={item.name}
                            comment={item.comment}
                            index={idx}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CommentList;
