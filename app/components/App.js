var React = require('react');
var Menu = require('./Menu');
var Home = require('./Home');
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
          <div className="row">
            <div className="col-sm text-center">
              <Switch>
                <Route exact path ='/' component={Home} />
                <Route render={function() {
                    return <p>Not Found</p>
                  }} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

module.exports = App;