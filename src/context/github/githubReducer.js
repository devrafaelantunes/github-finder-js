import {
    SEARCH_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING,
    SET_COLOR
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_COLOR:
            return {
                ...state,
                color: action.payload
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