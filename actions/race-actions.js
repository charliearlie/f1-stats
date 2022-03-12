import axios from "axios";
import {
    GET_RACE_RESULT_SUCCESS,
    GET_RACE_SCHEDULE_SUCCESS,
} from "./action-types";

export function getRoundRaceResult(season = "current", round) {
  return (dispatch) => {
    axios
      .get(`/api/race/round-results?year=${season}&round=${round}`)
      .then((res) => {
        dispatch(setRaceRoundResult(res.data));
      });
  };
}

export function getRaceSchedule(season = "current") {
    return (dispatch) => {
      axios
        .get(`/api/race/race-schedule?year=${season}`)
        .then((res) => {
          dispatch(setRaceSchedule(res.data));
        });
    };
  }

export function getListOfSeasons() {
  return (dispatch) => {
    axios.get("/api/qualifying/get-seasons").then((res) => {
      dispatch(getSeasonsSuccess(res.data));
    });
  };
}

const setRaceRoundResult = (result) => ({
  type: GET_RACE_RESULT_SUCCESS,
  payload: result,
});

const setRaceSchedule = (result) => ({
    type: GET_RACE_SCHEDULE_SUCCESS,
    payload: result, 
});
