import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyHeader from "./header";
import Bottom from "./bottom";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<MyHeader />, document.getElementById("header"));
ReactDOM.render(<Bottom />, document.getElementById("bottom"));
