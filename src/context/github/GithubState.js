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
        color: "",
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)


    // Search Users


    // Get User


    // Get Repos


    // Clear Users


    // Set Loading


    // Set Color


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            color: state.color
        }}>
            {props.children}

    </GithubContext.Provider>
}

export default GithubState