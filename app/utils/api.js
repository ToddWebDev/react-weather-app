import axios from 'axios';

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = '980f2ba197f48f7cc33e7e221e8e55a8';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5,
    units: 'imperial'
  }
}

export function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
      console.log(currentWeather.data)
    }).then(function (error) {
      return error;
    })
}

export function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data
      console.log(forecastData.data)
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};