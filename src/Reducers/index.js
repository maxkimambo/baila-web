import { combineReducers } from 'redux'; 
import suggestions from './suggestionsReducer'; 
import profile from './profileReducer'; 

const rootReducer = combineReducers({
        suggestions,
        profile
}); 

export default rootReducer; 