import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Exapp from "./Exapp";
import Navbar from "./component/Navbar";
import Content from "./component/Content";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Navbar />
        <Content />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
