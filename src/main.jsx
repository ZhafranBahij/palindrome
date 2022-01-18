import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App className="bg-[url('/img/Background.jpg')]" />
  </React.StrictMode>,
  document.getElementById("root")
);
