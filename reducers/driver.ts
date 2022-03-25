import { SET_DRIVER_INFORMATION } from "../actions/action-types";
const initialState = {};

export default function driverReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_DRIVER_INFORMATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
