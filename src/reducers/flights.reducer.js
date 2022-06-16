import { FLIGHTS_LIST_RECIEVED } from "../actions/flights.actions";

const initialState = {
  flightsList: [],
  date: '',
  searchInfo: '',
};

export const flightsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FLIGHTS_LIST_RECIEVED: 
      return {
      ...state,
      flightsList: action.payload.flightsList,
    };
    default: 
      return state;
  };
}