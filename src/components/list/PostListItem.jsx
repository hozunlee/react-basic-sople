import React from "react";

const PostListItem = ({ post, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="w-4/5 m-4 flex flex-col items-start justify-center border-solid border border-gray-700 rounded-lg cursor-pointer bg-white hover:bg-gray-300"
        >
            <p className="text-base">{post.title}</p>
        </div>
    );
};

export default PostListItem;
