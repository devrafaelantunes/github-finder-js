import Alert from './Alert'
import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Search(props) {
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const onChange = (e) => {
        setError(false)
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === "") {

            props.changeColor("red")
            setError(true)
        } else {
            setError(false)
            props.searchUsers(text)
            props.changeColor("green")
            setText('')
        }
    }

    const onClear = () => {
        setError(false)
        props.clearUsers()
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                type='text'
                name='text' 
                placeholder='Search User...' 
                value={text}
                onChange={onChange}/>
                <input type='submit' value='Search' className='btn btn-dark btn-block'/>
            </form>
            {props.showClear && <button className="btn btn-light btn-block" onClick={onClear}>Clear</button>}

            {error && <Alert reason="Your search cannot be empty"/>}
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
}

export default Search;
