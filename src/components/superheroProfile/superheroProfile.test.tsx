import React from "react";
import { shallow } from "enzyme";
import { SuperheroProfile } from "./index";

describe("Superhero Profile", () => {
  it("Render without errors", () => {
    const component = shallow(
      <SuperheroProfile
        name={"test"}
        id={1}
        power={"test"}
        powerLevel={1}
        selected
      />
    );
    const wrapper = component.find(`[data-test='superheroProfile']`);
    expect(wrapper.length).toBe(1);
  });
});
