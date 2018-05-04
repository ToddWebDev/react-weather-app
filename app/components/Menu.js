var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var WeatherForm = require('./WeatherForm');


class Menu extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <WeatherForm />
        </li>
      </ul>
    )
  }
}

module.exports = Menu;