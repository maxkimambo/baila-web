import React from 'react';
import ReactDOM from 'react-dom';
import App from './Root';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Actions from './../../Actions'; 
import configureStore from './../../Store/configureStore';
import Root from './Root'; 

it('renders without crashing', () => {
  const store = configureStore(); 
store.dispatch(Actions.LoadMatches()); 
  const div = document.createElement('div');

  ReactDOM.render(
    
    <Provider store={store}> 
      <Root/>
    </Provider> 
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
