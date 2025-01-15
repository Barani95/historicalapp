import { MARK_VISITED, UNMARK_VISITED } from "./actions";
import { historicalPlaces } from "../data";

const initialState = {
  places: historicalPlaces.map((place) => ({ ...place, visited: false })),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_VISITED:
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload ? { ...place, visited: true } : place
        ),
      };
    case UNMARK_VISITED:
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload ? { ...place, visited: false } : place
        ),
      };
    default:
      return state;
  }
};

export default reducer;
