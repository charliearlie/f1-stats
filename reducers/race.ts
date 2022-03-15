import { SET_RACE_RESULT, SET_RACE_SCHEDULE } from "../actions/action-types";
const initialState = {
  year: "current",
};

export default function raceReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_RACE_RESULT:
      return { ...state, ...action.payload };
    case SET_RACE_SCHEDULE:
      return { ...state, schedule: action.payload };
    default:
      return state;
  }
}
