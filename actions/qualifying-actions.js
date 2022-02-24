import axios from "axios";

export function getSeasonQualifyingResults(season = 'current') {
  return (dispatch) => {
    axios.get(
      `/api/qualifying/season-qualifying-results?year=${season}`
    ).then(res => {
      dispatch(getSeasonQualifyingResultsSuccess(res.data));
    });
  };
}

export function getListOfSeasons() {
  return dispatch => {
    axios.get('/api/qualifying/get-seasons').then(res => {
      dispatch(getSeasonsSuccess(res.data));
    })
  }
}

const getSeasonsSuccess = (seasons) => ({
  type: "GET_SEASONS_SUCCESS",
  payload: [
    ...seasons,
  ]
});

const getSeasonQualifyingResultsSuccess = (results) => ({
  type: "GET_SEASON_QUALIFYING_RESULTS_SUCCESS",
  payload: {
    ...results,
  },
});

const setSelectedQualifyingSeason = season => ({
  type: 'SET_QUALIFYING_SEASON',
  payload: season
});
