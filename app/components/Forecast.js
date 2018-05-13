import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Forecast extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col s12">
          <Link className='waves-effect waves-light btn' to={{pathname: '/'}}>Start Over</Link>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>Forecast</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Forecast;