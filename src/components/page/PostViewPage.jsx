import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

import useStore from "../../status/store";
import { useState } from "react";

const PostViewPage = () => {
    const [comment, setComment] = useState();
    const navigate = useNavigate();
    const { postId } = useParams();
    console.log(
        "🚀 ~ file: PostViewPage.jsx ~ line 15 ~ PostViewPage ~ postId",
        postId
    );

    const { sopleData } = useStore();

    const post = sopleData.find((item) => {
        return item.id == postId;
    });
    console.log(
        "🚀 ~ file: PostViewPage.jsx ~ line 19 ~ PostViewPage ~ post",
        post
    );

    return (
        <div className="p-4 w-screen flex flex-col items-center justify-center ">
            <div className=" w-full mb-4 last:mb-1">
                <Button title="뒤로 가기" onClick={() => navigate("/")} />
                <div className="px-4 py-3 border border-solid border-cyan-500 rounded-lg">
                    <p className="titleText text-lg font-extrabold">
                        {post.title}
                    </p>
                    <p className="font-base leading-8 whitespace-pre-wrap">
                        {post.content}
                    </p>
                </div>
                <p className="commentlabel">댓글</p>
                <CommentList comments={post.comments} />

                <TextInput
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <Button title="댓글작성하기" onClick={() => navigate("/")} />
            </div>
        </div>
    );
};

export default PostViewPage;
