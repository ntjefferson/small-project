import { ADD_HERO, DELETE_HERO, SELECT_HERO } from "../actions";

import heroReducer, { initState } from "./reducer";

const hero = {
  id: 100,
  name: "test",
  power: "test",
  powerLevel: 1,
  selected: false
};

describe("Hero Reducer", () => {
  it("Return default state", () => {
    const defaultState = heroReducer(undefined, {});
    expect(defaultState).toEqual(initState);
  });

  it("Should add new hero", () => {
    const defaultState = heroReducer(undefined, {
      type: ADD_HERO,
      payload: hero
    });
    expect(defaultState.heroList.length).toBe(5);
  });

  it("Should delete hero", () => {
    const defaultState = heroReducer(undefined, {
      type: DELETE_HERO,
      payload: 1
    });
    expect(defaultState.heroList.length).toBe(3);
  });

  it("Should select hero", () => {
    const defaultState = heroReducer(undefined, {
      type: SELECT_HERO,
      payload: 1
    });
    expect(defaultState.heroList[0].selected).toBe(true);
  });
});
