var React = require('react');
var WeatherForm = require('./WeatherForm');

class Home extends React.Component {
  render () {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Enter a City and State</h1>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <WeatherForm />
      </div>
    )
  }
}

module.exports = Home;