import React from 'react';
import Departure from './Departure';
import Arrival from './Arrival';

const FligthsBoard = ({filterdData, isDeparture}) => {
  return (
    <table className='flightBoard'>
      {
        isDeparture
        ? <Departure filterdData={filterdData}/>
        : <Arrival filterdData={filterdData}/>
      }
    </table>
  );
};

export default FligthsBoard;