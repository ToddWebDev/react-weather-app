var axios = require('axios');

module.exports = {
  fetchWeather: function () {
    var encodedURI = window.encodeURI(' http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=980f2ba197f48f7cc33e7e221e8e55a8');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};