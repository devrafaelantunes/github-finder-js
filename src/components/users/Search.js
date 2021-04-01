import React, {useState} from 'react'


function Search(props) {
    const [text, setText] = useState()

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchUsers(text)
        setText('')
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
        </div>
    )
}

export default Search
