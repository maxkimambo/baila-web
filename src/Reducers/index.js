import initialState from './initialState'; 
import { combineReducers } from 'redux'; 
import matches from './matchesReducer'; 

const rootReducer = combineReducers({
        matches
}); 

export default rootReducer; 