import React, { useState } from "react";
import Calc from "./Calc";

const BmiForm = () => {
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
      <h2>Body Mass Index (BMI)</h2>
      <label htmlFor="size">Size</label>

      <input
        id="size"
        placeholder="Size (cm)"
        onChange={handleChangeSize}
      ></input>
      <label htmlFor="weight">Weight</label>

      <input
        id="weight"
        placeholder="Weight (kg)"
        onChange={handleChangeWeight}
      ></input>
      <Calc size={size} weight={weight}></Calc>
    </div>
  );
};

export default BmiForm;
