import React, { useState } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const Square = () => {
  const [sideLength, setSideLength] = useState(0);
  const [longLength, setLongLength] = useState(0);
  const [area, setArea] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "sideLength") {
      setSideLength(value);
    } else if (name === "longLength") {
      setLongLength(value);
    } else {
      console.log("error");
    }
  };

  const handleCalculateArea = () => {
    try {
      if (sideLength <= 0 || longLength <= 0) {
        // eslint-disable-next-line no-throw-literal
        throw "กรุณาป้อนค่าความกว้างและความยาว";
      }
      const area = (sideLength * longLength) / 2;
      setArea(area);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <HeaderComp />
      <div style={{ textAlign: "center" }}>
        <h3>คำนวณพื้นที่สี่เหลี่ยมจตุรัส</h3>
        ป้อนความกว้าง :{" "}
        <input type={"number"} name="sideLength" onChange={handleInputChange} />
        <br />
        <br />
        ป้อนความยาว :{" "}
        <input type={"number"} name="longLength" onChange={handleInputChange} />
        <br />
        <br />
        <button onClick={handleCalculateArea}>
          คำนวณพื้นที่สี่เหลี่ยมจตุรัส
        </button>
        <br />
        <br />
        <div style={{ fontSize: "24px" }}>
          พื้นที่สี่เหลี่ยมจตุรัสเป็น : {area.toFixed(2)}
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Square;
