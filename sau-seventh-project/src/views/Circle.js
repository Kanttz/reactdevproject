import React, { useState } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const Circle = () => {
  const [areaCircle, setAreaCircle] = useState(0);
  const [radius, setRadius] = useState(0);
  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const calArea = () => {
    try {
      if (radius < 0) {
        throw new Error("Radius cannot be negative");
      }
      if (typeof radius !== "number") {
        throw new Error("Radius must be a number");
      }
      setAreaCircle(Math.PI * radius ** 2);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <HeaderComp />
      <div style={{ textAlign: "center" }}>
        <h3>คำนวณพื้นที่วงกลม</h3>
        ป้อนรัศมี :
        <input type={"number"} onChange={handleRadiusChange} />
        <br />
        <br />
        <button onClick={calArea}>คำนวณพื้นที่วงกลม</button>
        <br />
        <br />
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          พื้นที่วงกลมเป็น : {areaCircle.toFixed(2)}
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Circle;
