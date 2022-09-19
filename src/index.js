import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Tick from "./components/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <Tick></Tick> */}
    </React.StrictMode>
);
