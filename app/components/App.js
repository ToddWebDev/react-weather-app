import React from 'react'
import Menu from './Menu'
import Home from './Home'
import WeatherForm from './WeatherForm'
import Forecast from './Forecast'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

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
      <BrowserRouter>
        <div className="container">
          <Menu />
          <br/>
          <Switch>
            <Route exact path ='/' component={WeatherForm} />
            <Route path ='/forecast' component={Forecast} />
            <Route render={function() {
                return <p>Not Found</p>
              }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;