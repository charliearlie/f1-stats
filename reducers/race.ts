import {
    GET_RACE_RESULT_SUCCESS,
    GET_RACE_SCHEDULE_SUCCESS,
  } from "../actions/action-types";
  const initialState = {
    year: "current",
  };
  
  export default function raceReducer(state = initialState, action: any) {
    switch (action.type) {
      case GET_RACE_RESULT_SUCCESS:
        return { ...state, ...action.payload };
      case GET_RACE_SCHEDULE_SUCCESS:
          return {...state, schedule: action.payload};  
      default:
        return state;
    }
  }