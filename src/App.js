import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import React, {Fragment} from 'react'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
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
                <Route exact path='/' component={Home}/>
                <Route exact path='/about'component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
