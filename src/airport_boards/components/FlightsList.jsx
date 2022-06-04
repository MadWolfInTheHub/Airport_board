import React from 'react';
import { dataFilter } from './dataFilter';
import FligthsBoard from './FligthsBoard';

const FlightsList = ({ flightData, searchInfo, isDeparture }) => {
  const filterdData = searchInfo === '' 
    ? flightData
    : dataFilter(flightData, searchInfo);
    return (
      <>
        {
          filterdData.length === 0 
          ? <div className='fligths-not-found'>No flights</div>
          : <FligthsBoard 
            filterdData={filterdData}
            isDeparture={isDeparture}
            />
        }
      </>
  );
};

export default FlightsList;