import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsSelectors from '../selectors/flights.selectors';
import SearchFlight from './SearchFlight';
import * as flightsActions from '../actions/flights.actions';

const Board = ({ flightsList, date, searchInfo, getFlightsList, flightsDateToCheck, flightToSearch, match }) => {
  useEffect(() => {
    getFlightsList(date)  
  }, [date])



  
  return (
    <section className='airport-board'>
      <h4 className='notice'>Please pay Attention that flights after February 24th 2022 were canceled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <SearchFlight 
        flightsList={flightsList}
        date={date}
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
