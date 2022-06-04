import { FLIGHTS_LIST_RECIEVED, FLIGHTS_DATE_TO_CHECK, SEARCH_INFO } from "./flights.actions";

const initialState = {
  flightsList: [],
  date: '2021-03-12',
  searchInfo: '',

};

export const flightsReducer = (state = initialState, action) => {
  switch(action.type) {

    case FLIGHTS_LIST_RECIEVED: 
      return {
      ...state,
      flightsList: action.payload.flightsList,
    };

    case FLIGHTS_DATE_TO_CHECK:
      return {
        ...state,
        date: action.payload.date,
    }

    case SEARCH_INFO:
      return {
        ...state,
        searchInfo: action.payload.searchData,
      }

    default: 
      return state;
  };
}