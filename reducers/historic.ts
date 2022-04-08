import { SET_DRIVERS } from "../actions/action-types";
const initialState = {};

export default function historicReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_DRIVERS:
      return { ...state, drivers: action.payload };
    default:
      return state;
  }
}
