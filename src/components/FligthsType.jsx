import React from 'react';
import { Link } from 'react-router-dom';

const FlightsType = ({ isDeparture, handleIsDeparture, value, date }) => {
  return (
    <div className='flights__type'>
      <button 
        className={isDeparture ? 'flights__type_btn departure displayed' : 'flights__type_btn departure'}
        onClick={isDeparture ? null : handleIsDeparture}
      >
      <Link to={`/departures?search=${value}&date=${date}`}>
        <i className="fas fa-plane-departure"></i>
        <span className='departure__text'>departures</span>
      </Link>
      </button>
      <button 
        className={isDeparture ? 'flights__type_btn arrival' : 'flights__type_btn arrival displayed'}
        onClick={isDeparture ? handleIsDeparture : null}
      >
      <Link to={`/arrivals?search=${value}&date=${date}`}>
        <span className='arrival__text'>arrivals</span>
        <i className="fas fa-plane-arrival arrival__icon"></i>
      </Link>
      </button>
     </div>
  )
}

export default FlightsType;