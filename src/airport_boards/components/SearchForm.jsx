import React from 'react';

const SearchForm = ({ flightsDateToCheck, handleIsDeparture, handleChange, onSubmit, searchInfo, value, isDeparture, date }) => {
  return (
    <div className='flights'>
    <form 
      className='flights__search-form'
      onSubmit={onSubmit}
    >
      <input
        type="date"
        name="date"
        className="flights__search-form_date"
        format='DD-MM-YYYY'
        value={date}
        onChange={flightsDateToCheck}
      />
      <div className='flights__search-form_field'>
        <i className="fas fa-search"></i>
        <input 
          className='flights__search-form_input'
          placeholder='Airline, destination or flight #'
          value={value}
          onChange={handleChange}
        >
        </input>
        <button className='flights__search-form_submit btn'>search</button>
      </div>
    </form>
    <div className='flights__type'>
      <button 
        className={isDeparture ? 'flights__type_btn departure displayed' : 'flights__type_btn departure'}
        onClick={isDeparture ? null : handleIsDeparture}
      >
      <i className="fas fa-plane-departure"></i>
        <span className='departure__text'>departures</span>
      </button>
      <button 
        className={isDeparture ? 'flights__type_btn departure' : 'flights__type_btn departure displayed'}
        onClick={isDeparture ? handleIsDeparture : null}
      >
        <span className='arrival__text'>arrivals</span>
      <i className="fas fa-plane-arrival arrival__icon"></i>
      </button>
    </div>
  </div>
  );
};

export default SearchForm;