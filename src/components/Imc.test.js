import React from "react";
import { shallow } from "enzyme";
import Imc from "./Imc";
import Calc from "./Calc";

describe("Components", () => {
  describe("Imc", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Imc></Imc>);
    });

    test("renders a size input", () => {
      expect(wrapper.find("#size")).toExist();
    });

    test("renders a weight input", () => {
      expect(wrapper.find("#weight")).toExist();
    });

    test("contains the Calc component", () => {
      expect(wrapper).toContainReact(<Calc></Calc>);
    });
  });
});
