import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import BmiForm from "./components/BmiForm";

test("contain the BMI Form component", () => {
  const wrapper = shallow(<App></App>);
  expect(wrapper.find(BmiForm)).toExist();
});
