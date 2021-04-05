import React from 'react'
import Navbar from '../layout/Navbar'

function Alert({reason}) {
    return (
        <div>
            <h1 style={{color: "red", fontSize: "13px"}}>{reason}</h1>
        </div>
    )
}

export default Alert