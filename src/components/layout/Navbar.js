import React from 'react'
import PropTypes from 'prop-types'

function Navbar({title, icon, color}) {
    return (
        <nav className='navbar bg-primary' style={{backgroundColor: color}}>
            <h1>
                <i className={icon} /> {title}
            </h1>
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