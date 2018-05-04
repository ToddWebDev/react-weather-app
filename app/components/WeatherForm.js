var React = require('react');

class WeatherForm extends React.Component {
  render () {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6 offset-s3">
              <i className="material-icons prefix">home</i>
              <input id="icon_prefix" type="text" className="validate"/>
              <label for="icon_prefix">Enter City</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-s3">
              <a class="waves-effect waves-light btn-large btn-block">Get My Weather</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = WeatherForm;