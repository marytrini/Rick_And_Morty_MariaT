import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";
const intialState = {
  myFavorites: [],
};

const rootReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.map(
        (character) => character.id !== payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };

    default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
