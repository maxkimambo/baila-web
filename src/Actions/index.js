
import initialState from '../Reducers/initialState'; 
import * as actionType from './actionTypes'; 

// action creators 
export const ShowAll = (users) => {
    return {
        type: actionType.SHOW_ALL, 
        users
    }
}

export const Match = (user) => {
  
    return {
        type: actionType.MATCH,
        user 
    }
}

export const ShowMatches = () => {
    return {
        type: actionType.SHOW_MATCHES
    }
}

export const ShowMessages = () => {
    return {
        type: actionType.SHOW_MESSAGES
    }
}

export const setFilter = (filter) => {
    return {
        type: actionType.SET_FILTER,
        filter
    };
}

export const LoadMatches = () => {
    // do api call
    return ShowAll(initialState); 
    
}