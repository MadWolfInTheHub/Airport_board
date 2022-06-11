import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsSelectors from '../selectors/flights.selectors';
import SearchFlight from './SearchFlight';
import * as flightsActions from '../actions/flights.actions';

const Board = ({ flightsList, date, searchInfo, getFlightsList, flightsDateToCheck, flightToSearch, match }) => {
  const pathChange = (value) => {
    location.pathname = value
  }
  const dateToShow = match !== undefined ? match.params.date : date


  useEffect(() => {
    getFlightsList(dateToShow)  
  }, [date])

  
  return (
    <section className='airport-board'>
      <h4 className='notice'>Pay Attention that flights after February 24th 2022 were canseled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <SearchFlight 
        pathChange={pathChange}
        flightsList={flightsList}
        date={dateToShow}
        flightsDateToCheck={flightsDateToCheck}
        searchInfo={searchInfo}
        flightToSearch={flightToSearch}
        />
    </section>
  );
};

const mapStateToProps = state => ({
    flightsList: flightsSelectors.fligthsListSelector(state),
    date: flightsSelectors.dateSelector(state),
    searchInfo: flightsSelectors.flightToSearchSelector(state),
});

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
  flightsDateToCheck: flightsActions.flightsDateToCheck,
  flightToSearch: flightsActions.flightToSearch,
};

export default connect(mapStateToProps, mapDispatch)(Board);