import React, {useReducer} from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SET_COLOR
} from '../types'


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        color: "purple",
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)


    // Search Users
    const searchUsers = async (text) => {
        setLoading()
        const res = await fetch(`https://api.github.com/search/users?q=${text}`)
        const data = await res.json()


        dispatch({
            type: SEARCH_USERS,
            payload: data.items
        })
    }


    // Get User


    // Get Repos


    // Clear Users


    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})


    // Set Color
    const setColor = (color) => dispatch({
        type: SET_COLOR,
        payload: color
    })


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            color: state.color,
            searchUsers,
            setColor
        }}>
            {props.children}

    </GithubContext.Provider>
}

export default GithubState