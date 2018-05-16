import React from 'react'
import PropTypes from 'prop-types'
import api from '../utils/api'
import WeatherForm from './WeatherForm'
import {Link} from 'react-router-dom';



class Menu extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="brand-logo">React Weather App</a>
          <ul className="right hide-on-med-and-down">
            <li><a href=""><i className="material-icons right"></i>Get Weather</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Menu;