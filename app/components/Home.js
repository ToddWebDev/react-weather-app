var React = require('react');
var WeatherForm = require('./WeatherForm');

class Home extends React.Component {
  render () {
    return (
      <WeatherForm />
    )
  }
}

module.exports = Home;