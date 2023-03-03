/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../images/SHAPE.jfif";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to SHAPE</h1>
      <img src={logo} style={{ maxWidth: "20%" }} />
    </div>
  );
};

export default Home;
