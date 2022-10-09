import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useState } from "react";

const PostWritePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="p-4 w-screen flex flex-col items-center justify-center ">
            <div className="w-full p-16 last:p-1">
                <TextInput
                    value={title}
                    height={20}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextInput
                    value={content}
                    height={480}
                    onChange={(event) => setContent(event.target.value)}
                />
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
        </div>
    );
};

export default PostWritePage;
