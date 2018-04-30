import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Root from './components/App/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <Root/>
    , 
     document.getElementById('root'));
     
registerServiceWorker();