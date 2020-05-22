import React, { useState } from "react";
import Calc from "./Calc";

const Imc = () => {
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <input id="size" onChange={handleChangeSize}></input>
      <input id="weight" onChange={handleChangeWeight}></input>
      <Calc size={size} weight={weight}></Calc>
    </div>
  );
};

export default Imc;
