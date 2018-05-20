import React from 'react';
import {getForecast} from '../utils/api'
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom';

function ForecastDetail(props) {
  return (
    <div className="row jumbotron">
      <div className="col s12">
        <h3>5 Day Forecast for <span className="uppercase">{props.weather.city.name}</span></h3>
        <ul className="flex-box">
          {props.weather.list.map((day) => (
            <li className="flex-item" key={day.dt}>
              <h5 className="uppercase">{day.weather[0].description}</h5>
              <img className='weather small' src={'./app/images/weather-icons/' + day.weather[0].icon + '.svg'} alt='Weather' />
              <br/>
              <p className="red-text text-lighten-2">{day.main.temp.toFixed(0)}</p>
              <h5 className="uppercase label red-text text-lighten-2">degrees</h5>
            </li>
          ))}
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
        {this.state.loading 
            ? <h3>Loading...</h3>
            : <ForecastDetail weather={this.state.weather} />}
        <div className="row jumbotron">
          <div className="col s12">
            <Link className='waves-effect waves-light btn' to='/'>Get More Weather</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Forecast;