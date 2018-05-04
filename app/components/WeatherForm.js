var React = require('react');

class WeatherForm extends React.Component {
  render () {
    return (
      <form className="form-inline">
        <input className='form-control mb-2 mr-sm-2' type='text' name='location' placeholder='Enter City'/>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    )
  }
}

module.exports = WeatherForm;