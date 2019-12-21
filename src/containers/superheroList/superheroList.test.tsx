import React from "react";
import { shallow } from "enzyme";
import { SuperheroList } from "./index";
import { deleteHero } from "../../redux/actions";

const hero = {
    id: 1,
    name: "test",
    power: "test",
    powerLevel: 1,
    description: "",
    selected: false,
}

// Only doing a shallow render
// We are not using a mock store, just using the unconnected component
describe("Superhero List Component", () => {
  it("Render without errors", () => {
    const component = shallow(<SuperheroList heroList={[hero]} selected={[hero]} />);
    const wrapper = component.find(`[data-test='superheroList']`);
    expect(wrapper.length).toBe(1);
  });
});
