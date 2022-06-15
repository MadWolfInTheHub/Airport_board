import { fetchFlights } from "../service/flightsGateway";
export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

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