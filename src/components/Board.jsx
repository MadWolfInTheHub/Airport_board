import React from 'react';

import { Outlet } from 'react-router-dom';

const Board = ({ flightsList, getFlightsList }) => {
  console.log('hi')
  return (
    <section className='airport-board'>
      <h4 className='notice'>Please pay Attention that flights after February 24th 2022 were canceled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <Outlet 
        flightsList={flightsList}
        getFlightsList={getFlightsList}
      />
    </section>
  );
};

export default (Board);
