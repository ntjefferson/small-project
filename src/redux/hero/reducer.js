import {
  ADD_HERO,
  DELETE_HERO,
  SELECT_HERO,
  UPDATE_SELECTED,
  SORT_ID,
  SORT_NAME,
  SORT_POWER
} from "../actions";

export const initState = {
  heroList: [
    {
      id: 1,
      name: "Ironman",
      power: "He has a suit",
      powerLevel: 10,
      description: "He's rich and has a powerful suit",
      selected: false
    },
    {
      id: 2,
      name: "Thor",
      power: "Godly powers",
      powerLevel: 100,
      description: "He can control lightning, has a magic hammer",
      selected: false
    },
    {
      id: 3,
      name: "Captain Marvel",
      power: "Super strength, bunch of stuff",
      powerLevel: 250,
      description: "She is easily the most powerful in the Marvel movies",
      selected: false
    },
    {
      id: 4,
      name: "Developer Man",
      power: "Coding",
      powerLevel: 2,
      description: "Can write React apps and stuff, likes his morning coffee.",
      selected: false
    }
  ],
  id: 5,
  selected: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_HERO:
      return {
        ...state,
        heroList: [
          { ...action.payload, id: state.id, selected: false },
          ...state.heroList
        ],
        id: state.id + 1
      };

    case DELETE_HERO:
      return {
        ...state,
        heroList: state.heroList.filter(
          hero => hero.id !== parseInt(action.payload)
        )
      };

    case SELECT_HERO:
      return {
        ...state,
        heroList: state.heroList.map(hero =>
          hero.id === parseInt(action.payload)
            ? { ...hero, selected: !hero.selected }
            : hero
        )
      };

    case UPDATE_SELECTED:
      return {
        ...state,
        selected: state.heroList.filter(hero => hero.selected)
      };

    case SORT_ID:
      return {
        ...state,
        heroList: state.heroList.slice(0).sort((a, b) => (a.id > b.id ? 1 : -1))
      };

    case SORT_NAME:
      return {
        ...state,
        heroList: state.heroList
          .slice(0)
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      };

    case SORT_POWER:
      return {
        ...state,
        heroList: state.heroList
          .slice(0)
          .sort((a, b) => (a.powerLevel > b.powerLevel ? -1 : 1))
      };

    default:
      return state;
  }
}
