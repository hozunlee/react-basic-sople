import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Library from "./components/Library";
import Comment from "./ch05/Comment";
import CommentList from "./ch05/CommentList";
import Ref from "./ch07/Ref";
import Accommodate from "./ch07/Accommodate";
import Debounce from "./ch07/test/Debounce";
import Apple from "./ch07/test/apple";
import AttendanceBook from "./ch10/AttendanceBook";
import LandingPage from "./ch09/LandingPage";
import Signup from "./ch11/Signup";
import Cal from "./ch12/Cal";
import DarkOrLight from "./ch14/DarkOrLight";
import TextInput from "./components/ui/TextInput";

import MainPage from "./components/page/MainPage";
import PostWritePage from "./components/page/PostWritePage";
import PostViewPage from "./components/page/PostViewPage";

function App() {
    return (
        <div className="App">
            {/* <Library />
            <Ref />
            <Accommodate /> */}
            {/* <Debounce /> */}
            {/* <CommentList /> */}
            {/* <AttendanceBook />
            <LandingPage />
            <Apple /> */}
            {/* <Signup /> */}
            {/* <Cal />
            <DarkOrLight />
            <TextInput height={100} /> */}

            <BrowserRouter>
                <p className="p-1 text-center">호준의 미니 블로그</p>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="post-write" element={<PostWritePage />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
