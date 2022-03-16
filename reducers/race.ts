import { SET_RACE_RESULT } from "../actions/action-types";
const initialState = {
  year: "current",
};

export default function raceReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_RACE_RESULT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
