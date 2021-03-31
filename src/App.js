import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import React, {useEffect, useState} from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromGitHub = await fetchUsers()
      setUsers(usersFromGitHub)
    }

    getUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()
    
    return data
  }

  return (


    <div className="App">
        <Navbar/>
        <div className='container'>
          <Users users={users}/>
        </div>
    </div>
  );
}

export default App;
