import React from 'react';
import moment from 'moment';

const FligthsBoard = ({filteredData, isDeparture}) => {
  const rendomKey = () => Math.random();
  return (
    <table className='flightBoard'>
    <tbody>
      <tr key={rendomKey()}>
        <th className='terminal'>Terminal</th>
        {
          isDeparture 
          ?
          <>
            <th className='localTtime'>Local time</th>
            <th className='destination'>Destination</th>
          </>
          :
          <>
            <th className='localTtime'>Takeof time</th>
            <th className='destination'>From</th>
          </>

        }
        <th className='status'>Status</th>
        <th className='airline'>Airline</th>
        <th className='flight'>Flight</th>
      </tr>
      {
        filteredData.map(flight => (
          <tr key={rendomKey()}>
            <td className='terminal board-table'>{flight.term}</td>
            {
              isDeparture
              ?
              <>
                <td className='localTtime board-table'>{moment(flight.timeDepFact).format('hh:mm')}</td>
                <td className='destination board-table'>{flight['airportToID.city_en']}</td>
              </>
              :
              <>
                <td className='localTtime board-table'>{moment(flight.timeTakeofFact).format('hh:mm')}</td>
                <td className='destination board-table'>{flight['airportFromID.city_en']}</td>
              </>

            }
            <td className='status board-table'>{flight.status}</td>
            <td className='airline board-table'>
              <img className='logo' src={flight.airline.en.logoSmallName}/>
              {flight.airline.en.name}
            </td>
            <td className='flight board-table'>{`${flight['carrierID.IATA']}${flight.fltNo}`}</td>
          </tr>
        ))
      }
    </tbody>
    </table>
  );
};

export default FligthsBoard;