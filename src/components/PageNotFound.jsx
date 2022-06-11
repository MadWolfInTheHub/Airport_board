import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div className='page__content'>
        <h1>😢</h1>
        <Link to="/">Page not found. Go back to flights search</Link>
      </div>
    );
  };
};

export default PageNotFound;
