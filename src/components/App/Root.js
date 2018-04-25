import React from 'react';
import './App.css';
import Heading from '../Header/Header';
import Profile from '../Profile/Profile';

import {Route} from 'react-router-dom';
import About from '../About/About'; 
import Matches from '../Matches'; 
import Settings from '../Settings'; 


const Root = () => {
  return (
  <div className="App">
      <Heading />
      <Route exact path='/' component={Profile} />
      <Route path='/about' component={About} /> 
      <Route path='/matches' component={Matches} /> 
      <Route path='/settings' component={Settings} /> 
    
  </div>
)
}

export default Root;
