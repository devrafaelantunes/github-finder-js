import React, {useContext, useEffect} from 'react'
import GithubContext from '../../context/github/githubContext'

function NotFound() {
    const githubContext = useContext(GithubContext)
    
    useEffect(() => {
        githubContext.setColor("#ff69a7")
        // eslint-disable-next-line
    }, [])
     

    return (
        <div>
            <h1>Not Found</h1>
            <p className="lead">The page you are looking for does not exist...</p>
        </div>
    )
}

export default NotFound
