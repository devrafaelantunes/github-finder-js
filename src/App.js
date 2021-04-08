import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import React, {Fragment, useState} from 'react'
import Search from './components/users/Search'
import About from './components/pages/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GithubState from './context/github/GithubState'

const App = () => {

  return (
    <GithubState>
      <Router>
        <div className="App">
            <Navbar/>
            <div className='container'>
              <Switch>
                <Route exact path='/' render={props => (
                    <Fragment>
                      <Search/>
                      <Users/>
                    </Fragment>
                )}/>
                <Route exact path='/about'component={About}/>
                <Route exact path='/user/:login' component={User}/>
              </Switch>
            </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
