import React from "react";
import { shallow } from "enzyme";
import Calc from "./Calc";

describe("Components", () => {
  describe("Calc", () => {
    test("renders a calculation of the IMC", () => {
      const wrapper = shallow(<Calc size={178} weight={72}></Calc>);
      expect(wrapper.find("#imc")).toHaveText("22.72");
    });
  });
});
