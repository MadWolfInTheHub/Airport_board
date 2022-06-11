import React from 'react';

const FlightsType = ({ isDeparture, handleIsDeparture }) => {
  return (
    <div className='flights__type'>
      <button 
        className={isDeparture ? 'flights__type_btn departure displayed' : 'flights__type_btn departure'}
        onClick={isDeparture ? null : handleIsDeparture}
      >
      <i className="fas fa-plane-departure"></i>
        <span className='departure__text'>departures</span>
      </button>
      <button 
        className={isDeparture ? 'flights__type_btn arrival' : 'flights__type_btn arrival displayed'}
        onClick={isDeparture ? handleIsDeparture : null}
      >
        <span className='arrival__text'>arrivals</span>
      <i className="fas fa-plane-arrival arrival__icon"></i>
      </button>
     </div>
  )
}

export default FlightsType;