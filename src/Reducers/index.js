import { combineReducers } from 'redux'; 
import suggestions from './suggestionsReducer'; 

const rootReducer = combineReducers({
        suggestions
}); 

export default rootReducer; 