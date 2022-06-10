import React from 'react';

const SearchForm = ({ flightsDateToCheck, handleChange, onSubmit, value, date }) => {
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
        <button className='flights__search-form_submit btn' type='submit'>search</button>
      </div>
    </form>
  </div>
  );
};

export default SearchForm;