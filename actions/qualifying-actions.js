import axios from "axios";
import {
  GET_SEASONS_SUCCESS,
  GET_SEASON_QUALIFYING_POLES_SUCCESS,
  SET_QUALIFYING_SEASON,
} from "./action-types";

export function getSeasonQualifyingPoles(season = "current") {
  return (dispatch) => {
    axios
      .get(`/api/qualifying/season-qualifying-poles?year=${season}`)
      .then((res) => {
        dispatch(getSeasonQualifyingResultsSuccess(res.data));
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

const getSeasonsSuccess = (seasons) => ({
  type: GET_SEASONS_SUCCESS,
  payload: [...seasons],
});

const getSeasonQualifyingResultsSuccess = (poles) => ({
  type: GET_SEASON_QUALIFYING_POLES_SUCCESS,
  payload: poles.results,
});

const setSelectedQualifyingSeason = (season) => ({
  type: SET_QUALIFYING_SEASON,
  payload: season,
});
