import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import SideNavBar from './components/nav/SideNavBar';
import Home from './components/Home'
import DinnerForm from './components/DinnerForm'
import Dinners from './containers/Dinners'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Dinner-n-10 a React-Redux Application</h1>
          </header>
        </div>
        <Router>
          <div className='overflow'>
            <SideNavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dinners/new' component={DinnerForm} />
              <Route path='/dinners' component={Dinners} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
