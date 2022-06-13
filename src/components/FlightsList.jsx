import React from 'react';
import { dataFilter } from '../utils/dataFilter';
import FligthsBoard from './FligthsBoard';

const FlightsList = ({ flightData, searchInfo, isDeparture }) => {
  const flights = isDeparture ? flightData.departure : flightData.arrival;
  const filterData = searchInfo === '' 
    ? flights
    : dataFilter(flights, searchInfo, isDeparture);
    return (
      <>
        {
          filterData.length === 0 
          ? <div className='fligths-not-found'>No flights</div>
          : <FligthsBoard 
            filteredData={filterData}
            isDeparture={isDeparture}
            />
        }
      </>
  );
};

export default FlightsList;
