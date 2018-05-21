import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Actions from './Actions';
import configureStore from './Store/configureStore';
import Root from './components/App/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(); 
store.dispatch(Actions.LoadMatches()); 

ReactDOM.render(
    <Provider store={store}> 
        <Root />
     </Provider> 
    , 
     document.getElementById('root'));

registerServiceWorker();