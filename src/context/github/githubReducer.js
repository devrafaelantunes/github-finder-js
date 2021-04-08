import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SET_COLOR,
    CLEAR_USERS
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
                color: "green"
            }
        case SET_COLOR:
            return {
                ...state,
                color: action.payload
            }
        case CLEAR_USERS:
            return {
                ...state,
                color: "purple",
                loading: false,
                users: [],
                error: false
            }
        case SEARCH_USERS: 
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}