import {
  GET_SEASONS_SUCCESS,
  GET_SEASON_QUALIFYING_POLES_SUCCESS,
  SET_QUALIFYING_SEASON,
} from "../actions/action-types";
const initialState = {
  year: new Date().getFullYear(),
  poles: [],
  seasons: [],
};

export default function qualifyingReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_QUALIFYING_SEASON:
      return { ...state, year: action.payload };
    case GET_SEASONS_SUCCESS:
      return { ...state, seasons: action.payload };
    case GET_SEASON_QUALIFYING_POLES_SUCCESS:
      return { ...state, poles: action.payload };
    default:
      return state;
  }
}
