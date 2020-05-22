import React from "react";

const Calc = (props) => {
  const imc = (props.weight / Math.pow(props.size / 100, 2)).toFixed(2);
  return (
    <div>
      <span id="imc">{imc}</span>
    </div>
  );
};

export default Calc;
