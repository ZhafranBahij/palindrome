import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Exapp from "./Exapp";
import Navbar from "./component/Navbar";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
