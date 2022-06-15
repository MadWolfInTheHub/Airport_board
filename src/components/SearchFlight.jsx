import React, { useState } from 'react';
import FlightsList from './FlightsList';
import FligthsType from './FligthsType';
import History from './History';
import SearchForm from './SearchForm';

const  SearchFlight = ({ flightsList, date, flightsDateToCheck, searchInfo, flightToSearch, }) =>{
  const [value, setValue] = useState(searchInfo);
  const [isDeparture, setIsDeparture] = useState(true) 
  
  const handleIsDeparture = () => {
    setIsDeparture(!isDeparture)
  };
  
  const handleChange = (event) => {
    setValue(event.target.value)
  };
  
  const handleFlightsDateToCheck = (event) => {
    flightsDateToCheck(event.target.value);
    History.push(`/flight?search=${value}&date=${event.target.value}`)
  }
  
  const onSubmit = event => {
    event.preventDefault();
    flightToSearch(value) 
    History.push(`/flight?search=${value}&date=${date}`)
    
  };
  
  if (value === '') {
    flightToSearch(value)
  };
    
  return (
    <>
      <SearchForm
        handleChange={handleChange}
        onSubmit={onSubmit}
        date={date}
        flightsDateToCheck={handleFlightsDateToCheck}
        value={value}
        flightToSearch={flightToSearch}
      />
      <FligthsType 
        handleIsDeparture={handleIsDeparture}
        isDeparture={isDeparture}
      />
      {
        flightsList !== undefined ?
        <FlightsList 
          flightData={flightsList}
          searchInfo={searchInfo}
          isDeparture={isDeparture}
        />
        : null
      }
    </>
  );
};

export default SearchFlight;