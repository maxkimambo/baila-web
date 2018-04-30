
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './../Reducers'; 
import thunk from 'redux-thunk'; 
import initialState from './../Reducers/initialState'; 

const ConfigureStore = (initialState) => {
    return createStore(
            rootReducer, 
            {matches: initialState}
            // applyMiddleware(thunk())
    ); 
}

export default ConfigureStore; 