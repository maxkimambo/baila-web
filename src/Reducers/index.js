import { combineReducers } from 'redux'; 
import suggestions from './suggestionsReducer'; 
import profile from './profileReducer'; 
import settings from './settingsReducer'; 

const rootReducer = combineReducers({
        suggestions,
        profile,
        settings
}); 

export default rootReducer; 