import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Circle from "./views/Circle";
import Home from "./views/Home";
import Square from "./views/Square";
import Triangle from "./views/Triangle";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Southeast Asia University</h1>
      <div style={{ textAlign: "center" }}>
        <Link to="/" style={{ padding: 10 }}>
          Home Area
        </Link>
        <Link to="/circle" style={{ padding: 10 }}>
          Circle Area
        </Link>
        <Link to="/square" style={{ padding: 10 }}>
          Square Area
        </Link>
        <Link to="/triangle" style={{ padding: 10 }}>
          Triangle Area
        </Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle" element={<Circle />} />
        <Route path="/square" element={<Square />} />
        <Route path="/triangle" element={<Triangle />} />
      </Routes>
    </>
  );
}

export default App;
