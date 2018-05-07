var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link

class Forecast extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col s12">
          <Link className='waves-effect waves-light btn' to={{pathname: '/'}}>Start Over</Link>
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

module.exports = Forecast;