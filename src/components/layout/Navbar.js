import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'

function Navbar({title, icon}) {
    const githubContext = useContext(GithubContext)  
    const onHomeClick = () => githubContext.setColor("purple")
    const onAboutClick = () => githubContext.setColor("blue")
    
    return (
        <nav className='navbar bg-primary' style={{backgroundColor: githubContext.color}}>
            <h1>
                <i className={icon} /> {title}
            </h1>

            <ul>
                <li>
                    <Link to="/" onClick={onHomeClick}>Home</Link>                    
                </li>
                <li>
                    <Link to="/about" onClick={onAboutClick}>About</Link>  
                </li>
            </ul>
        </nav>
    )
}


Navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}


export default Navbar