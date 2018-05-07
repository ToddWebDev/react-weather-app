var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link

class Forecast extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <Link className='waves-effect waves-light btn' to={{pathname: '/',}}>Start Over</Link>
        </div>
      </div> 
    )
  }
}

module.exports = Forecast;