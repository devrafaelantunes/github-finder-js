import React, {useEffect, Fragment} from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

function User(props) {
    useEffect(() => {
        props.getUser(props.match.params.login)
        props.getUserRepos(props.match.params.login)
        props.setUserColor()
    }, [])
    
    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = props.user;

    return (
        <Fragment>
            <div className="card grid-2">
                <div className="all-center">
                    <img
                    src={avatar_url}
                    className="round-img"
                    alt=""
                    style={{width: '150px'}}/> 

                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>

                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio:</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}

                    <ul>
                        <li>
                            {login && <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>}
                        </li>

                        <li>
                            {company && <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>}
                        </li>

                        <li>
                            {blog && <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>}
                        </li>

                        <li>
                            <strong>Hireable:</strong> {' '}
                            {hireable ?
                                <i className="fas fa-check text-success"/> : 
                                <i className="fas fa-times-circle text-danger"/>
                            }
                        </li>
                        
                    </ul>

                    <a href={html_url} className="btn btn-dark my-1">
                        Visit GitHub Profile
                    </a>

                </div>

            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={props.repos}/>

            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
        
        </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
