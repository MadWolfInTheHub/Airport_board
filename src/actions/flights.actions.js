import { fetchFlights } from "../service/flightsGateway";
export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const FLIGHTS_DATE_TO_CHECK = 'FLIGHTS_DATE_TO_CHECK';
export const SEARCH_INFO = 'SEARCH_INFO';

export const flightsListRecieved = flightsList => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
  return action;
};

export const getFlightsList = (date) => {
  const thunkAction = function(dispatch) {
    fetchFlights(date).then(flightsList => 
      dispatch(flightsListRecieved(flightsList))
    );
  };
  return thunkAction;
};

export const flightsDateToCheck = date => {
  const action = {
    type: FLIGHTS_DATE_TO_CHECK,
    payload: {
      date,
    },
  };
  return action;
};

export const flightToSearch = searchData => {
  const action = {
    type: SEARCH_INFO,
    payload: {
      searchData,
    },
  };
  return action;
};