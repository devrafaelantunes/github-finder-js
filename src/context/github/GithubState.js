import React, {useReducer} from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    CLEAR_USERS,
    SET_COLOR
} from '../types'


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        color: "purple",
        loading: false,
        error: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get Repos
    const getUserRepos = async(username) => {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
    
        const data = await res.json()
        
        dispatch({
            type: GET_REPOS,
            payload: data
        })
    }


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
    const getUser = async(username) => {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)
    
        const data = await res.json()
        dispatch({
            type: GET_USER,
            payload: data
        })
    }

    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})


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
            setColor,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}

    </GithubContext.Provider>
}

export default GithubState