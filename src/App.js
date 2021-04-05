import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import React, {Fragment, useState} from 'react'
import Search from './components/users/Search'
import About from './components/pages/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [navbarColor, setColor] = useState("purple")

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

  const changeColor = (color) => {
    setColor(color)
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
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
