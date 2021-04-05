import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import React, {useState} from 'react'
import Search from './components/users/Search'

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
    <div className="App">
        <Navbar color={navbarColor}/>
        <div className='container'>
          <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0 ? true : false} changeColor={setColor}/>
          <Users users={users} loading={loading}/>
        </div>
    </div>
  );
}

export default App;
