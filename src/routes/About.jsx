import { useState } from "react";
import "../App.css";
import Navbar from "../component/Navbar";
import Content from "../component/Content";

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
