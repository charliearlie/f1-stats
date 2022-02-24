import axios from "axios";
import { GET_CIRCUIT_QUALIFYING_RESULTS_SUCCESS } from "./action-types";

export function getCircuitSeasonQualifyingResults(circuit, season = "current") {
  return (dispatch) => {
    axios
      .get(
        `/api/circuit/qualifying-results?circuitId=${circuit}&year=${season}`
      )
      .then((res) => {
        dispatch(getCircuitQualifyingResultsSuccess(res.data));
      });
  };
}

const getCircuitQualifyingResultsSuccess = (response) => ({
  type: GET_CIRCUIT_QUALIFYING_RESULTS_SUCCESS,
  payload: response.results,
});
