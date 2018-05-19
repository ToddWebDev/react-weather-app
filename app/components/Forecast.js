import React from 'react';
import {getForecast} from '../utils/api'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Forecast extends React.Component {
  componentDidMount() {
      getForecast(this.props.match.params.cityId)
        .then((weather) => {
          console.log(weather);
          this.setState(function() {
            return {
              weather: weather
            }
          })
        });
    }
  render() {
    const { match } = this.props;
    return (
      <div className="container">
      <div className="row">
        <div className="col s12">
          <Link className='waves-effect waves-light btn' to='/'>Start Over</Link>
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