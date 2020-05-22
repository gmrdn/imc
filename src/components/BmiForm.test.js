import React from "react";
import { shallow } from "enzyme";
import BmiForm from "./BmiForm";
import Calc from "./Calc";

describe("Components", () => {
  describe("BmiFrom", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<BmiForm></BmiForm>);
    });

    test("renders a size input", () => {
      expect(wrapper.find("#size")).toExist();
    });

    test("renders a weight input", () => {
      expect(wrapper.find("#weight")).toExist();
    });

    test("contains the Calc component", () => {
      expect(wrapper.find(Calc)).toExist();
    });

    test("sends size and weight to Calc on user inputs", () => {
      const inputSize = wrapper.find("#size");
      const inputWeight = wrapper.find("#weight");
      inputSize.simulate("change", { target: { value: 1 } });
      inputWeight.simulate("change", { target: { value: 2 } });
      expect(wrapper.find(Calc).props()).toMatchObject({ size: 1, weight: 2 });
    });
  });
});
