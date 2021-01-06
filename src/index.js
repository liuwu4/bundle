// import React from "react";
// import ReactDOM from "react-dom";
// ReactDOM.render(<div>1234</div>, document.getElementById("app"));
import "./styles/global.less";
import { say } from "./Test";
const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);
say();
