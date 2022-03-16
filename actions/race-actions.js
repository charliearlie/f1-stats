import { requestData } from "./thunk-helper";
import { SET_RACE_RESULT, SET_SCHEDULE } from "./action-types";

export function getRoundRaceResult(season = "current", round) {
  return requestData(
    `/api/race/round-results?year=${season}&round=${round}`,
    setRoundRaceResult
  );
}

export function getRaceSchedule(season = "current") {
  return requestData(`/api/race/race-schedule?year=${season}`, setRaceSchedule);
}

const setRoundRaceResult = (result) => ({
  type: SET_RACE_RESULT,
  payload: result,
});

const setRaceSchedule = (result) => ({
  type: SET_SCHEDULE,
  payload: result,
});
