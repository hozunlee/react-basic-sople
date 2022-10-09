import React from "react";
import CommentListItem from "./CommentListItem";

const CommentList = ({ comments }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-4 last:mb-1">
            {comments &&
                comments.map((comment, idx) => {
                    return (
                        <CommentListItem key={comment.id} comment={comment} />
                    );
                })}
        </div>
    );
};

export default CommentList;
