import axios from "axios";
import { requestData } from "./thunk-helper";
import {
  SET_QUALIFYING_SEASONS,
  SET_SEASON_QUALIFYING_POLES,
  SET_QUALIFYING_SEASON,
} from "./action-types";

export function getSeasonQualifyingPoles(season = "current") {
  return requestData(
    `/api/qualifying/season-qualifying-poles?year=${season}`,
    setSeasonQualifyingResults
  );
}

export function getListOfSeasons() {
  return requestData("/api/qualifying/get-seasons", setSeasons);
}

const setSeasons = (seasons) => ({
  type: SET_QUALIFYING_SEASONS,
  payload: [...seasons],
});

const setSeasonQualifyingResults = (poles) => ({
  type: SET_SEASON_QUALIFYING_POLES,
  payload: poles.results,
});

const setSelectedQualifyingSeason = (season) => ({
  type: SET_QUALIFYING_SEASON,
  payload: season,
});
