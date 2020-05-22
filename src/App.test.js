import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Imc from "./components/Imc";

test("contain the IMC component", () => {
  const wrapper = shallow(<App></App>);
  expect(wrapper.find(Imc)).toExist();
});
