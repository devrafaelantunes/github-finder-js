import Alert from './Alert'
import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'



function Search(props) {
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const onChange = (e) => {
        setError(false)
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === "") {

            githubContext.setColor("red")
            setError(true)
        } else {
            setError(false)
            githubContext.searchUsers(text)
            githubContext.setColor("green")
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
            {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}

            {error && <Alert reason="Your search cannot be empty"/>}
        </div>
    )
}

export default Search;
