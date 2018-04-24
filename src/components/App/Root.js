import React from 'react';
import './App.css';
import Heading from '../Header/Header';
import Profile from '../Profile/Profile';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from '../About/About'; 

const Root = () => {
  return (
  <div className="App">
      <Heading />
      <Route exact path='/' component={Profile} />
      <Route path='/about' component={About} /> 
  </div>
)
}

export default Root;
