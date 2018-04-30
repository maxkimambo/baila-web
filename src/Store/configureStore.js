
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './../Reducers'; 
import thunk from 'redux-thunk'; 

const ConfigureStore = (initialState) => {
    return createStore(
            rootReducer,  
            applyMiddleware(thunk)
    ); 
}

export default ConfigureStore; 