var React = require('react');
var WeatherForm = require('./WeatherForm');

class Home extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1>Enter a City and State</h1>
        <br/>
        <WeatherForm />
      </div>
    )
  }
}

module.exports = Home;