import React from 'react';
import moment from 'moment';

const Arrival = ({ filterdData }) => {
  return (
    <tbody>
      <tr>
        <th className='terminal'>Terminal</th>
        <th className='localTtime'>Takeof time</th>
        <th className='destination'>From</th>
        <th className='status'>Status</th>
        <th className='airline'>Airline</th>
        <th className='flight'>Flight</th>
      </tr>
      {
        filterdData.map(flight => (
          <tr key={flight.id}>
            <td className='terminal board-table'>{flight.term}</td>
            <td className='localTtime board-table'>{moment(flight.timeTakeofFact).format('hh:mm')}</td>
            <td className='destination board-table'>{flight['airportFromID.city_en']}</td>
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
  );
};

export default Arrival;