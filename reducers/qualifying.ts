const initialState = {
    year: 0,
    results: [],
    seasons: []
  }
  
  export default function takeHomeReducer(state = initialState, action: any) {
      switch (action.type) {
        case 'GET_SEASONS_SUCCESS':
          return {...state, seasons: action.payload};
        case 'GET_SEASON_QUALIFYING_RESULTS_SUCCESS':
          return {...state, ...action.payload};
        default:
          return state
      }
    }