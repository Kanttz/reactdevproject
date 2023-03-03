import React, { useState, useEffect } from "react";

function SauCompE() {
  const [name, setName] = useState("??? ???");
  const [midterm, setMidterm] = useState(0);
  const [final, setFinal] = useState(0);
  const [total, setTotal] = useState("?");
  const [grade, setGrade] = useState("?");

  const handleChangeOfName = (e) => {
    setName(e.target.value);
  };
  const handleChangeOfMidterm = (e) => {
    setMidterm(e.target.value);
  };
  const handleChangeOfFinal = (e) => {
    setFinal(e.target.value);
  };

  useEffect(() => {
    const newTotal = parseFloat(midterm) + parseFloat(final);
    const newGrade =
      newTotal < 0
        ? "ป้อนค่าไม่ถูกต้อง"
        : newTotal > 50 && newTotal <= 60
        ? "D"
        : newTotal > 60 && newTotal <= 70
        ? "C"
        : newTotal > 70 && newTotal <= 80
        ? "B"
        : newTotal > 80 && newTotal <= 100
        ? "A"
        : newTotal > 100
        ? "ป้อนค่าไม่ถูกต้อง"
        : "?";
    setTotal(newTotal);
    setGrade(newGrade);
  }, [midterm, final]);

  const handleReset = () => {
    setName("");
    setMidterm(0);
    setFinal(0);
    setTotal("?");
    setGrade("?");
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  };

  return (
    <div className="center">
      <div className="card">
        <h1>แสดงผลการเรียน</h1>
        <hr />
        ป้อนชื่อ :{" "}
        <input
          onChange={handleChangeOfName}
          type="Text"
          placeholder="ชื่อ-สกุล"
        />{" "}
        <br />
        <br />
        ป้อนกลางภาค :{" "}
        <input
          onChange={handleChangeOfMidterm}
          type="Number"
          placeholder="0.00"
        />{" "}
        <br />
        <br />
        ป้อนปลายภาค :{" "}
        <input
          onChange={handleChangeOfFinal}
          type="Number"
          placeholder="0.00"
        />{" "}
        <br />
        <br />
        <button onClick={handleReset}>ยกเลิก</button>
        <hr />
        คุณ : {name} <br />
        คะแนนกลางภาค : {midterm} <br />
        คะแนนปลายภาค : {final} <br />
        คะแนนรวม : {total} <br />
        เกรดที่ได้ : {grade} <br />
      </div>
    </div>
  );
}

export default SauCompE;
