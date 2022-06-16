export const dataFilter = (flightData, flightToSearch, isDeparture) => {
  const search = flightToSearch.toLowerCase();

  return flightData.filter(flight => 
    `${flight['carrierID.IATA']}${flight.fltNo}`.toLowerCase().includes(search)
    || flight.airline.en.name.toLowerCase().includes(search)
    || (!isDeparture ? flight['airportFromID.city_en'].toLowerCase().includes(search) : flight['airportToID.city_en'].toLowerCase().includes(search)));
}