import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import React, {Fragment, useState} from 'react'
import Search from './components/users/Search'
import About from './components/pages/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [navbarColor, setColor] = useState("purple")


  const getUser = async(username) => {
    setLoading(true)
    const res = await fetch(`https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    const data = await res.json()
    setLoading(false)
    setUser(data)

    console.log(data)
  }

  const searchUsers = async (text) => {
    setLoading(true)
    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

      const data = await res.json()
      setLoading(false)
      setUsers(data.items)
  }

  const clearUsers = () => {
    setUsers([])
    setColor("purple")
    setLoading(false)
  }


  return (
    <Router>
      <div className="App">
          <Navbar color={navbarColor}/>
          <div className='container'>
            <Switch>
              <Route exact path='/' render={props => (
                  <Fragment>
                    <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} changeColor={setColor}/>
                    <Users users={users} loading={loading}/>
                  </Fragment>
              )}/>
              <Route exact path='/about'component={About}/>
              <Route exact path='/user/:login' render={props =>( 
                <User {...props} getUser={getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
