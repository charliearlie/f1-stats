import {
  SET_CIRCUIT_INFORMATION,
  SET_CIRCUIT_QUALIFYING_RESULTS,
} from "../actions/action-types";
const initialState = {
  selectedCircuit: "",
  qualifyingResults: [],
  raceResults: [],
  year: "current",
};

export default function circuitReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CIRCUIT_QUALIFYING_RESULTS:
      return { ...state, qualifyingResults: action.payload };
    case SET_CIRCUIT_INFORMATION:
      return { ...state, selectedCircuit: action.payload };
    default:
      return state;
  }
}
