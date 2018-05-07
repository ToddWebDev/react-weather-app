var React = require('react');
var Menu = require('./Menu');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends React.Component {
  //Component Lifecycle Hooks
  componentDidMount() {
    console.log('--componentDidMount--')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('--componentDidUpdate--')
  }
  componentWillUnmount() {
    console.log('--componentWillUnmount--')
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          <br/>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route path ='/forecast' component={Forecast} />
            <Route render={function() {
                return <p>Not Found</p>
              }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;