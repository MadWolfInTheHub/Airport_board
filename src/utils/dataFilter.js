export const dataFilter = (flightData, flightToSearch) => {
  return flightData.filter(flight => 
    `${flight['carrierID.IATA']}${flight.fltNo}` === flightToSearch
    || flight.airline.en.name === flightToSearch
    || flight['airportFromID.city_en'] === flightToSearch
    || flight['airportToID.city_en']=== flightToSearch);
}