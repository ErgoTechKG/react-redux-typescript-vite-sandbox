import React from "react";
import ReactDOM from "react-dom";
import "./view/index.css";
import App from "./view/App";
import { createRootElement } from "./root";
import "./i18n";
import 'antd/dist/reset.css';

ReactDOM.render(createRootElement(), document.getElementById("root"));
