import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({ posts, onClickItem }) => {
    return (
        <div className="flex flex-col items-start justify-center mb-4 w-full last:mb-1">
            {posts &&
                posts?.map((post, idx) => {
                    return (
                        <PostListItem
                            key={post.id}
                            post={post}
                            onClick={() => {
                                onClickItem(post.id);
                            }}
                        />
                    );
                })}
        </div>
    );
};

export default PostList;
