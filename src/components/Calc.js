import React from "react";

const Calc = (props) => {
  var imc = 0;
  if (props.weight > 0 && props.size > 0) {
    imc = (props.weight / Math.pow(props.size / 100, 2)).toFixed(2);
  }
  return (
    <div>
      <span id="imc">{imc}</span>
      <span id="alert">{imc >= 25 || imc < 18.5 ? "*" : ""}</span>
    </div>
  );
};

export default Calc;
