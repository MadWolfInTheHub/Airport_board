import React, { useState, useEffect } from 'react';
import FlightsList from './FlightsList';
import FligthsType from './FligthsType';
import SearchForm from './SearchForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightsSelectors from '../selectors/flights.selectors';
import * as flightsActions from '../actions/flights.actions';

const  SearchFlight = ({ flightsList, getFlightsList }) =>{
  const { search, pathname } = useLocation();
  const props = useLocation();
  const navigate = useNavigate()
  console.log(props)
  let searchInfo;
  let searchDate;

  if(search) {
    searchInfo = search.split('&').at(0).split('=').at(1);
    searchDate = search.split('&').at(1).split('=').at(1);
  }
  
  const [value, setValue] = useState(searchInfo === undefined ? '' : searchInfo);
  const [date, setDate] = useState(searchDate === undefined ? '' : searchDate);
  const [isDeparture, setIsDeparture] = useState(pathname === '/departures' ? true : false);
  const newPath = (value, date) => navigate(`${isDeparture ? '/departures' : '/arrivals'}?search=${value}&date=${date}`);
  
  
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

const mapStateToProps = state => ({
  flightsList: flightsSelectors.fligthsListSelector(state),
});

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapStateToProps, mapDispatch)(SearchFlight);