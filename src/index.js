import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/App/Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/configureStore'
import { Provider } from 'react-redux';
import * as Actions from './Actions'; 

const store = configureStore(); 
store.dispatch(Actions.LoadMatches()); 

ReactDOM.render(
    <Provider store={store}> 
        <Root/>
     </Provider> 
    , 
     document.getElementById('root'));

registerServiceWorker();