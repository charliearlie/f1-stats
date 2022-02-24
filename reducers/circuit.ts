import { GET_CIRCUIT_QUALIFYING_RESULTS_SUCCESS } from "../actions/action-types";
const initialState = {
  selectedCircuit: "",
  qualifyingResults: [],
  raceResults: [],
  year: "current",
};

export default function circuitReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CIRCUIT_QUALIFYING_RESULTS_SUCCESS:
      return { ...state, qualifyingResults: action.payload };
    default:
      return state;
  }
}
