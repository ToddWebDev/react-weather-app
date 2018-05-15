import React from 'react'
import {getCurrentWeather} from '../utils/api'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'

class CurrentWeather extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Current Weather for Place</h1>
        </div>
      </div>
      </div>
    )
  }
}

class WeatherForm extends React.Component {
  static propTypes = {
    zipcode: PropTypes.string,
    weather: PropTypes.object
  }
  state = {
    zipcode: '',
    weather: {},
    toForecast: false
  }
  handleChange = (event) => {
    var value = event.target.value
    
    this.setState(() =>  ({
        zipcode: value,
        isValid: false
    }))
  }
  handleSubmit = (event) => {
    event.preventDefault()
      getCurrentWeather(this.state.zipcode)
        .then((weather) => {
          console.log(weather);
          this.setState(function() {
            return {
              toCurrentWeather: true,
              toForecast: false,
              weather: weather
            }
          })
        });
  }
  render () {
    if (this.state.toForecast === true) {
      return <Redirect to='/forecast' />
    }

    return (
      <div className="row jumbotron">
        {!this.state.toCurrentWeather &&
        <div>
          <h1>What's My Weather?</h1>
          <br/>
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col m6 offset-m3 s12">
                <i className="material-icons prefix">home</i>
                <input id="icon_prefix" type="text" className="validate" value={this.state.query}
            onChange={this.handleChange} required/>
                <label htmlFor="icon_prefix">Enter City Name</label>
              </div>
            </div>
            <div className="row">
              <div className="col m6 offset-m3 s12">
                <button type="submit" className="btn waves-effect waves-light btn-large btn-block">Get My Weather</button>
              </div>
            </div>
          </form>
        </div>
        }
        {this.state.toCurrentWeather &&
          <CurrentWeather />
        }
      </div>
    )
  }
}

export default WeatherForm;