import React from "react";
import ReactDOM from "react-dom";
import "./view/index.css";
import App from "./view/App";
import { createRootElement } from "./root";
import "./i18n";

ReactDOM.render(createRootElement(), document.getElementById("root"));
