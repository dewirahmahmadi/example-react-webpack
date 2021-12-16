require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import reactDom from "react-dom";
import { App } from "./App";

const appElement = document.getElementById("app");

reactDom.render(<App />, appElement)