import React from 'react'

function UserItem({user}) {
    return (
        <div className="card text-center">
            <div key={user.id}>
                <img src={user.avatar_url} alt="" className="round-img" style={{width: '70px'}}/>
                <h3>{user.login}</h3>
                <a href={user.html_url} style={{marginBottom: "50px"}}className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    )
}

export default UserItem
