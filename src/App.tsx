import React from 'react';
import CitiesDisplay from './components/CitiesDisplay'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WeatherBoard from './components/WeatherBoard';
const App : React.FC = () => {
  return <>
    <Router>
      <Switch>
        <Route path="/" exact component={CitiesDisplay}/>
        <Route path="/weather-board/:cityid" component={WeatherBoard}/>
      </Switch>
    </Router>
  </>

}

export default App;
