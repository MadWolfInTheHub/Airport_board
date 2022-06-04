import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as flightsSelectors from '../flights.selectors';
import SearchFlight from './SearchFlight';
import * as flightsActions from '../flights.actions';

class Board extends Component {
  componentDidMount() {
    this.props.getFlightsList(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props) {
       return true;
    } else {
       return false;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.date !== this.props.date) {
      this.props.getFlightsList(this.props.date);
    }
  }

  render() {
    const flightsList = this.props.flightsList
    if (!flightsList) return null;
    
    return (
      <section className='airport-board'>
        <h1 className='title'>SEARCH FLIGHT</h1>
        <SearchFlight 
          flightsList={flightsList}
          date={this.props.date}
          flightsDateToCheck={this.props.flightsDateToCheck}
          searchInfo={this.props.searchInfo}
          flightToSearch={this.props.flightToSearch}
          />
      </section>
    );
  };
};

const mapState = state => {
  return {
    flightsList: flightsSelectors.fligthsListSelector(state),
    date: flightsSelectors.dateSelector(state),
    searchInfo: flightsSelectors.flightToSearchSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
  flightsDateToCheck: flightsActions.flightsDateToCheck,
  flightToSearch: flightsActions.flightToSearch,
};

export default connect(mapState, mapDispatch)(Board);