import React, { useState } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const Triangle = () => {
  const [base, setBase] = useState(0);

  const [height, setHeight] = useState(0);

  const [area, setArea] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "base") {
      setBase(value);
    } else if (name === "height") {
      setHeight(value);
    } else {
      return null;
    }
  };

  const handleCalculatetriangleArea = () => {
    if (base && height) {
      const area = (base * height) / 2;
      setArea(area);
    } else if (!base && !height) {
      alert("กรุณาป้อนค่าความยาวฐานและความสูงก่อนคำนวณ!");
    } else if (!base) {
      alert("กรุณาป้อนค่าความยาวฐานก่อนคำนวณ!");
    } else if (!height) {
      alert("กรุณาป้อนค่าความสูงก่อนคำนวณ!");
    }
  };

  return (
    <>
      <HeaderComp />
      <div style={{ textAlign: "center" }}>
        <h3>คำนวณพื้นที่สามเหลี่ยม</h3>
        ป้อนความยาวฐาน :{" "}
        <input type={"number"} name="base" onChange={handleInputChange} />
        <br />
        <br />
        ป้อนความสูง :{" "}
        <input type={"number"} name="height" onChange={handleInputChange} />
        <br />
        <br />
        <button onClick={handleCalculatetriangleArea}>
          คำนวณพื้นที่สามเหลี่ยม
        </button>
        <br />
        <br />
        <div style={{ fontSize: "24px" }}>
          พื้นที่สามเหลี่ยมเป็น : {area.toFixed(2)}
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Triangle;
