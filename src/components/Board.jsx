import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as flightsSelectors from '../selectors/flights.selectors';
import SearchFlight from './SearchFlight';
import * as flightsActions from '../actions/flights.actions';
import { useLocation } from 'react-router-dom';

const Board = ({ flightsList, getFlightsList }) => {
  const [searchFlight, setSearchInfo] = useState('')
  const [dateToshow, setDateToshow] = useState('')
  const { search } = useLocation()


  useEffect(() => {
    if(search) {
      setSearchInfo(search.split('&').at(0).split('=').at(1));
      setDateToshow(search.split('&').at(1).split('=').at(1))
    }
  }, [search])
  

  useEffect(() => {
    getFlightsList(dateToshow)  
  }, [dateToshow])


  return (
    <section className='airport-board'>
      <h4 className='notice'>Please pay Attention that flights after February 24th 2022 were canceled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <SearchFlight 
        flightsList={flightsList}
        date={dateToshow}
        flightsDateToCheck={setDateToshow}
        searchInfo={searchFlight}
        flightToSearch={setSearchInfo}
        />
    </section>
  );
};

const mapStateToProps = state => ({
  flightsList: flightsSelectors.fligthsListSelector(state),
});

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapStateToProps, mapDispatch)(Board);
