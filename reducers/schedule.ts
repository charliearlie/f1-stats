import { SET_SCHEDULE } from "../actions/action-types";

export default function scheduleReducer(state = {}, action: any) {
  switch (action.type) {
    case SET_SCHEDULE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
