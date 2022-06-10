import React from 'react';
import Departure from './Departure';
import Arrival from './Arrival';

const FligthsBoard = ({filteredData, isDeparture}) => {
  return (
    <table className='flightBoard'>
      {
        isDeparture
        ? <Departure filteredData={filteredData}/>
        : <Arrival filteredData={filteredData}/>
      }
    </table>
  );
};

export default FligthsBoard;