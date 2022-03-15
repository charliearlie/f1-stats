import {
  SET_QUALIFYING_SEASONS,
  SET_SEASON_QUALIFYING_POLES,
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
    case SET_QUALIFYING_SEASONS:
      return { ...state, seasons: action.payload };
    case SET_SEASON_QUALIFYING_POLES:
      return { ...state, poles: action.payload };
    default:
      return state;
  }
}
