import React from "react";

function calculateImc(imc, props) {
  imc = (props.weight / Math.pow(props.size / 100, 2)).toFixed(2);
  return imc;
}
function isUnderWeight(imc) {
  return imc < 18.5;
}

function isOverWeight(imc) {
  return imc >= 25;
}

const Calc = (props) => {
  var imc = 0;
  if (props.weight > 0 && props.size > 0) {
    imc = calculateImc(imc, props);
  }
  return (
    <div>
      <span id="imc">{imc}</span>
      <span id="alert">
        {isOverWeight(imc) || isUnderWeight(imc) ? "*" : ""}
      </span>
    </div>
  );
};

export default Calc;
