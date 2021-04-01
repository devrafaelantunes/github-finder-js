import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import React, {useEffect, useState} from 'react'
import Search from './components/users/Search'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    /*const getUsers = async () => {
      const usersFromGitHub = await fetchUsers()
      setUsers(usersFromGitHub)
    }

    setLoading(false)
    getUsers()*/
  }, [])

/*  const fetchUsers = async () => {
    const res = await fetch(`https://api.github.com/users?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    const data = await res.json()
    
    return data
  } */

  const searchUsers = async (text) => {
    setLoading(true)
    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

      const data = await res.json()
      setLoading(false)
      setUsers(data.items)
  }

  return (


    <div className="App">
        <Navbar/>
        <div className='container'>
          <Search searchUsers={searchUsers}/>
          <Users users={users} loading={loading}/>
        </div>
    </div>
  );
}

export default App;
