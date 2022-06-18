import React, { useState, useEffect } from 'react';
import FlightsList from './FlightsList';
import FligthsType from './FligthsType';
import SearchForm from './SearchForm';
import { useParams, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const  SearchFlight = ({ flightsList, getFlightsList }) =>{
  const { search } = useLocation();
  const {data} = useParams();
  const history = useHistory()
  const q = useParams()
  console.log(data)
  console.log(window.location)

  let searchInfo;
  let searchDate;

  if(search) {
    searchInfo = search.split('&').at(0).split('=').at(1);
    searchDate = search.split('&').at(1).split('=').at(1);
  }
  
  const [value, setValue] = useState(searchInfo === undefined ? '' : searchInfo);
  const [date, setDate] = useState(searchDate === undefined ? '' : searchDate);
  const [isDeparture, setIsDeparture] = useState(true);
  const newPath = (value, date) => history.push(`${isDeparture ? 'departures' : 'arrivals'}?search=${value}&date=${date}`);
  
  
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
    newPath(value, event.target.value)
  }
  
  const onSubmit = event => {
    event.preventDefault();
    setValue(value);
    newPath(value, date);
  };

  useEffect(() => {
    if (value === '') {
      setValue(value)
      newPath(value, date);
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