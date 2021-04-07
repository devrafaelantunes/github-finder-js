import React from 'react'
import {Link} from 'react-router-dom'

function UserItem({user}) {
    return (
        <div className="card text-center">
            <div key={user.id}>
                <img src={user.avatar_url} alt="" className="round-img" style={{width: '70px'}}/>
                <h3>{user.login}</h3>

                <div>
                    <Link to={`/user/${user.login}`} style={{marginBottom: "50px"}}className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
