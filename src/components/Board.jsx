import React from 'react';
import { connect } from 'react-redux';
import * as flightsSelectors from '../selectors/flights.selectors';
import SearchFlight from './SearchFlight';
import * as flightsActions from '../actions/flights.actions';

const Board = ({ flightsList, getFlightsList }) => {
  return (
    <section className='airport-board'>
      <h4 className='notice'>Please pay Attention that flights after February 24th 2022 were canceled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <SearchFlight 
        flightsList={flightsList}
        getFlightsList={getFlightsList}
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
