import React from "react";

const CommentListItem = ({ comment }) => {
    return (
        <div className="w-2/3 p-4 flex flex-col, items-start justify-center border-solid border border-gray-700 rounded-lg cursor-pointer bg-white hover:bg-gray-300 ">
            <p className="text-lg font-semibold">{comment.content}</p>
        </div>
    );
};

export default CommentListItem;
