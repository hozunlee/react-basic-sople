import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import PostList from "../list/PostList";
import Button from "../ui/Button";

import data from "../../data.json";
import useStore from "../../status/store";
import { useEffect } from "react";

const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { sopleData, setSopleData } = useStore();

    useEffect(() => {
        try {
            setSopleData(data);
            setLoading(false);
        } catch (error) {
            console.error("에러남=>>>>", error);
        }
    }, []);

    if (loading) return <div>로딩중입둥둥</div>;
    return (
        <div className="p-4 w-screen flex flex-col items-center justify-center ">
            <div className="w-full max-w-fit">
                <Button
                    title=" 글 작성하기"
                    onClick={() => navigate("/post-write")}
                />
                <PostList
                    posts={sopleData}
                    onClickItem={(id) => navigate(`/post/${id}`)}
                />
            </div>
        </div>
    );
};

export default MainPage;
