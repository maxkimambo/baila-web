
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './../Reducers'; 
import thunk from 'redux-thunk'; 

const ConfigureStore = (initialState) => {
    return createStore(
            rootReducer,  
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            applyMiddleware(thunk)
           
    ); 
}

export default ConfigureStore; 