import React from "react";
import { shallow } from "enzyme";
import Calc from "./Calc";

describe("Components", () => {
  describe("Calc", () => {
    test("renders a calculation of the IMC", () => {
      const wrapper = shallow(<Calc size={178} weight={72}></Calc>);
      expect(wrapper.find("#imc")).toHaveText("22.72");
    });

    test("renders 0 when the value cannot be calculated", () => {
      const wrapper = shallow(<Calc size={0} weight={72}></Calc>);
      expect(wrapper.find("#imc")).toHaveText("0");
    });

    test("displays a * when the calculated IMC is equal or greater than 25", () => {
      const wrapper = shallow(<Calc size={170} weight={80}></Calc>);
      expect(wrapper.find("#alert")).toHaveText("*");
    });

    test("displays a * when the calculated IMC is less than 18.5", () => {
      const wrapper = shallow(<Calc size={170} weight={50}></Calc>);
      expect(wrapper.find("#alert")).toHaveText("*");
    });

    test("displays no * when the IMC is between 18.5 and 25", () => {
      const wrapper = shallow(<Calc size={178} weight={72}></Calc>);
      expect(wrapper.find("#alert")).toHaveText("");
    });
  });
});
