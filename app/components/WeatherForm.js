import React from 'react'
import {getCurrentWeather, getForecast} from '../utils/api'
import PropTypes from 'prop-types'
import {Redirect, Link} from 'react-router-dom'

//Stateless Functional Component
function CurrentWeather (props) {
  var icon = props.weather.weather[0].icon;
  return (
    <div className="container">
      <div className="row jumbotron">
        <div className="col s12">
          <h3>Current Weather for <span className="uppercase">{props.weather.name}</span></h3>
          <img className='weather' src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
          <h5 className="uppercase">{props.weather.weather[0].description}</h5>
          <div className="flex-box">
            <div className="flex-item">
              <h5 className="uppercase">Current<br/> Temperature</h5>
              <p className="red-text text-lighten-2">{props.weather.main.temp.toFixed(0)}</p>
              <h5 className="uppercase label red-text text-lighten-2">degrees</h5>
            </div>
            <div className="flex-item">
              <h5 className="uppercase">High<br/> Temperature</h5>
              <p className="red-text text-lighten-2">{props.weather.main.temp_max.toFixed(0)}</p>
              <h5 className="uppercase label red-text text-lighten-2">degrees</h5>
            </div>
            <div className="flex-item">
              <h5 className="uppercase">Low<br/> Temperature</h5>
              <p className="red-text text-lighten-2">{props.weather.main.temp_min.toFixed(0)}</p>
              <h5 className="uppercase label red-text text-lighten-2">degrees</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CurrentWeather.propTypes = {
  props: PropTypes.object
};

//Stateless Functional Component
function Forecast(props) {
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

Forecast.propTypes = {
  props: PropTypes.object
};

function Tabs (props) {
  function changeTab() {
    console.log('Ps: ', props)
  }
  let tabs = props.tabs;
  return (
    <ul className="tabs">
      {tabs.map( (tab) => 
        <li key={tab.id} className="tab col s3"><a className={tab.active  ? 'active' : ''} onClick={() => props.onTabChange(tab)}>{tab.name}</a></li>
      )}
    </ul>
  )
}


//Stateful Component that handles view toggles
class WeatherForm extends React.Component {
  static propTypes = {
    zipcode: PropTypes.string,
    weather: PropTypes.object,
    forecast: PropTypes.object,
  }
  state = {
    zipcode: '',
    weather: {},
    forecast: {},
    toCurrentWeather: false,
    toForecast: false,
    tabs: [
      {id: 1, name: 'Current Weather', active: true},
      {id: 2, name: 'Extended Forecast', active: false}
    ]
  }
  //Bind Form to state
  handleChange = (event) => {
    var value = event.target.value
    
    this.setState(() =>  ({
        zipcode: value,
        isValid: false
    }))
  }
  //Call API on form submit
  handleSubmit = (event) => {
    event.preventDefault()
      getCurrentWeather(this.state.zipcode)
        .then((weather) => {
          console.info('CURRENT WEATEHER: ', weather);
          this.setState(function() {
            return {
              toCurrentWeather: true,
              toForecast: false,
              weather: weather
            }
          })
        });
  }
  //Call API on button submit
  goToForecast = () => {
    getForecast(this.state.zipcode)
      .then((forecast) => {
        console.info('FORECAST: ', forecast);
        this.setState(function() {
          return {
            toCurrentWeather: false,
            toForecast: true,
            forecast: forecast,
            tabs: [
              {id: 1, name: 'Current Weather', active: false},
              {id: 2, name: 'Extended Forecast', active: true}
            ]
          }
        })
      });
  }
  goToWeather = () => {
    this.setState(() => {
      return {
        toCurrentWeather: true,
        toForecast: false,
        tabs: [
          {id: 1, name: 'Current Weather', active: true},
          {id: 2, name: 'Extended Forecast', active: false}
        ]
    }})
  }
  goToHome = () => {
    this.setState(() => {
      return {
        toCurrentWeather: false,
        toForecast: false,
      }
    })
  }
  handleTabChange = (tab) => {
    if(tab.id === 1 && this.state.toCurrentWeather || tab.id === 2 && this.state.toForecast){
      console.log('Tab already active.')
    } else if (tab.id === 1 && this.state.toForecast) {
      this.goToWeather();
    } else if (tab.id === 2 && this.state.toCurrentWeather) {
      this.goToForecast();
    }
  }
  componentDidMount() {
    M.AutoInit();
  }
  render () {
    return (
      <div className="row jumbotron">
        {!this.state.toCurrentWeather && !this.state.toForecast &&
        <div>
          <h1>What's the Weather?</h1>
          <br/>
          <form className="col xl4 offset-xl4 l8 offset-l2 m12 s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">home</i>
                <input id="icon_prefix" type="text" className="validate" value={this.state.query}
            onChange={this.handleChange} required/>
                <label htmlFor="icon_prefix">Enter City Name</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button type="submit" className="btn waves-effect waves-light btn-large btn-block">Get the Weather</button>
              </div>
            </div>
          </form>
        </div>
        }
        {this.state.toCurrentWeather &&
          <div>
            <Tabs 
              tabs={this.state.tabs} 
              onTabChange={this.handleTabChange}
            />
            <CurrentWeather weather={this.state.weather} />
          </div>
        }
        {this.state.toForecast &&
          <div>
            <Tabs 
              tabs={this.state.tabs} 
              onTabChange={this.handleTabChange}
            />
            <Forecast weather={this.state.forecast} />
          </div>
        }
        
      </div>
    )
  }
}

export default WeatherForm;