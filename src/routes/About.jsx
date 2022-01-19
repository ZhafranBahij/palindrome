import { useState } from "react";
import "../App.css";
import Navbar from "../component/Navbar";
import AboutComp from "../component/AboutComp";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Navbar />
        <AboutComp />
      </div>
    </>
  );
}

export default App;
