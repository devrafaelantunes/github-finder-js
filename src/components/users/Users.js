import React, {useState} from 'react'
import UserItem from './UserItem'

function Users({users}) {
    return (
        <div style={userStyle}>
            {users.map((user) => (<UserItem user={user}/>))}
        </div>
    )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users
