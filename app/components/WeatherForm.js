var React = require('react');
var api = require('../utils/api');
var PropTypes = require('prop-types');
//var Redirect = require('react-router-dom');
import {Redirect} from 'react-router-dom';


class WeatherForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      zipcode: '',
      weather: {},
      toForecast: false
    }
   
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    var value = event.target.value
    
    this.setState(function() {
      return {
        zipcode: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('Dilly Dilly');
    api.getCurrentWeather(this.state.zipcode)
      .then(function (weather) {
        console.log(weather);
        this.setState(function() {
          return {
            toForecast: true
          }
        })
      }.bind(this));

  }
  render () {
    if (this.state.toForecast === true) {
      return <Redirect to='/forecast' />
    }

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col m6 offset-m3 s12">
              <i className="material-icons prefix">home</i>
              <input id="icon_prefix" type="text" className="validate" value={this.state.query}
          onChange={this.handleChange}/>
              <label htmlFor="icon_prefix">Enter City</label>
            </div>
          </div>
          <div className="row">
            <div className="col m6 offset-m3 s12">
              <button type="submit" className="btn waves-effect waves-light btn-large btn-block">Get My Weather</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

WeatherForm.propTypes = {
  zipcode: PropTypes.string,
  weather: PropTypes.object
}


module.exports = WeatherForm;