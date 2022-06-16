import React, { useState, useEffect } from 'react';
import FlightsList from './FlightsList';
import FligthsType from './FligthsType';
import SearchForm from './SearchForm';
import { useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const  SearchFlight = ({ flightsList, flightToSearch, getFlightsList }) =>{
  const url = useLocation().search;
  const {data} = useParams();
  const history = useHistory()
  let searchInfo;
  let date1;

  if(url) {
    searchInfo = url.split('&').at(0).split('=').at(1);
    date1 = url.split('&').at(1).split('=').at(1);
  }
  
  console.log(date1)
  
  const [value, setValue] = useState(searchInfo === undefined ? '' : searchInfo);
  const [date, setDate] = useState(date1 === undefined ? '' : date1)
  const [isDeparture, setIsDeparture] = useState(data === 'departures' || data === undefined ? true : false) 
  

  useEffect(() => {
    getFlightsList(date)  
  }, [date])


  const handleIsDeparture = () => {
    setIsDeparture(!isDeparture)
  };
  
  const handleChange = (event) => {
    setValue(event.target.value)
  };
  
  const handleFlightsDateToCheck = (event) => {
    setDate(event.target.value);
    history.push(`${isDeparture ? 'depuarture' : 'arrivals'}?search=${value}&date=${event.target.value}`)
  }
  
  const onSubmit = event => {
    event.preventDefault();
    setValue(value) 
    history.push(`${isDeparture ? 'departure' : 'arrivals'}?search=${value}&date=${date}`)
    
  };
  useEffect(() => {
    if (value === '') {
      setValue(value)
      history.push(`${isDeparture ? 'departure' : 'arrivals'}?search=${value}&date=${date}`)

    };
  }, [])
  
 
    
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
        value={value}
        date={date}
      />
      {
        flightsList !== undefined ?
        <FlightsList 
          flightData={flightsList}
          searchInfo={value}
          isDeparture={isDeparture}
        />
        : null
      }
    </>
  );
};

export default SearchFlight;