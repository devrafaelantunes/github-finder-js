import React from 'react'
import Navbar from '../layout/Navbar'
import {FaTimes} from 'react-icons/fa'

function Alert({reason}) {
    return (
        <div>
            <FaTimes style={{color: 'red', position: 'relative', top: '3px'}}/>
            <h1 style={{color: 'red', fontSize: '13px', display: 'inline', marginLeft: '10px'}}>{reason}</h1>
        </div>
    )
}

export default Alert