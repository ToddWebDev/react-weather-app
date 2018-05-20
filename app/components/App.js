import React from 'react'
import Menu from './Menu'
import WeatherForm from './WeatherForm'
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
        <div className="container-fluid">
          <Menu />
          <br/>
          <Switch>
            <Route exact path ='/' component={WeatherForm} />
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