import React from "react";

const MyHelloComp = ({ dtia, dtib }) => {
  //   const { dtia, dtib } = props;
  return (
    <>
      <h2>{dtia}</h2>
      <br />
      <img src={dtib} width="100px" alt="Wow" />
    </>
  );
};

export default MyHelloComp;
