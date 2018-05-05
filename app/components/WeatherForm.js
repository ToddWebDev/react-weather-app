var React = require('react');
var api = require('../utils/api');

class WeatherForm extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      query: '',
      weather: {}
    }
   
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    var value = event.target.value
    
    this.setState(function() {
      return {
        query: value
      }
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('Dilly Dilly');
    api.fetchWeather()
      .then(function (weather) {
        this.setState(function () {
          return {
            weather: weather
          }
        });
      }.bind(this));

  }
  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <i className="material-icons prefix">home</i>
              <input id="icon_prefix" type="text" className="validate" value={this.state.query}
          onChange={this.handleChange}/>
              <label htmlFor="icon_prefix">Enter City</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-s3">
              <button type="submit"><a className="waves-effect waves-light btn-large btn-block">Get My Weather</a></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = WeatherForm;