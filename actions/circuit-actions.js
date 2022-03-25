import axios from "axios";
import { requestData } from "./thunk-helper";
import {
  SET_CIRCUIT_INFORMATION,
  SET_CIRCUIT_QUALIFYING_RESULTS,
} from "./action-types";

export function getCircuitSeasonQualifyingResults(circuit, season = "current") {
  return requestData(
    `/api/circuit/qualifying-results?circuitId=${circuit}&year=${season}`,
    setCircuitQualifyingResults
  );
}

export function getCircuitInformation(circuit) {
  return requestData(
    `/api/circuit/circuit-information?circuitId=${circuit}`,
    setCircuitInformation
  );
}

export function getAllCircuits() {
  // https://app.asana.com/0/1201955292286879/1201965219657988/f
}

const setCircuitQualifyingResults = (response) => ({
  type: SET_CIRCUIT_QUALIFYING_RESULTS,
  payload: response.results,
});

const setCircuitInformation = (response) => ({
  type: SET_CIRCUIT_INFORMATION,
  payload: response,
});
