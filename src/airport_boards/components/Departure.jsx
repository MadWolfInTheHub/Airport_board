import React from 'react';
import moment from 'moment';


const Departure = ({ filterdData }) => {
  return (
    <tbody>
      <tr>
        <th className='terminal'>Terminal</th>
        <th className='localTtime'>Local time</th>
        <th className='destination'>Destination</th>
        <th className='status'>Status</th>
        <th className='airline'>Airline</th>
        <th className='flight'>Flight</th>
      </tr>
      {
        filterdData.map(flight => (
          <tr key={flight.id}>
            <td className='terminal board-table'>{flight.term}</td>
            <td className='localTtime board-table'>{moment(flight.timeDepFact).format('hh:mm')}</td>
            <td className='destination board-table'>{flight['airportToID.city_en']}</td>
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

export default Departure;