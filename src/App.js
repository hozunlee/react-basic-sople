import "./App.css";
import Library from "./components/Library";
import Comment from "./ch05/Comment";
import CommentList from "./ch05/CommentList";
import Ref from "./ch07/Ref";
import Accommodate from "./ch07/Accommodate";
import Debounce from "./ch07/test/Debounce";
import Apple from "./ch07/test/apple";
import AttendanceBook from "./ch10/AttendanceBook";

import LandingPage from "./ch09/LandingPage";

function App() {
    return (
        <div className="App">
            {/* <Library />
            <Ref />
            <Accommodate /> */}
            {/* <Debounce /> */}
            {/* <CommentList /> */}
            <AttendanceBook />
            <LandingPage />
            <Apple />
        </div>
    );
}

export default App;
