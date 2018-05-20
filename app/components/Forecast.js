import React from 'react';
import {getForecast} from '../utils/api'
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom';

function ForecastDetail(props) {
  return (
    <div className="row">
      <div className="col s12">
        <h3>5 Day Forecast for <span className="uppercase">{props.weather.city.name}</span></h3>
        <ul>
          {props.weather.list.map(day => 
            <li key={day.dt}>{day.weather[0].description}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

ForecastDetail.propTypes = {
   weather: PropTypes.object.isRequired,
}

class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      weather: {}
    } 
  }
  componentDidMount() {
      getForecast(this.props.match.params.cityId)
        .then((weather) => {
          console.log(weather);
          this.setState(function() {
            return {
              loading: false,
              weather: weather
            }
          })
        });
    }
  render() {
    if (this.state.weather === undefined) {
      return <Redirect to='/' />;
    }
    return (
      <div className="container">
      <div className="row">
        <div className="col s12">
          <Link className='waves-effect waves-light btn' to='/'>Get More Weather</Link>
        </div>
      </div>
      {this.state.loading 
          ? <h3>Loading...</h3>
          : <ForecastDetail weather={this.state.weather} />}
      </div>
    )
  }
}

export default Forecast;