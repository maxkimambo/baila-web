import React from 'react';
import './App.css';
import Heading from '../Header/Header';
import Profile from '../Profile/Profile';

import {Route} from 'react-router-dom';
import About from '../About/About'; 

const Root = () => {
  return (
  <div className="App">
      <Heading />
      <Route exact path='/' component={Profile} />
      <Route path='/about' component={About} /> 
      {/* Other routes 
        Viewing a profile
        /profile/:id 
        
           <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
             
                <li className="nav-item">
                    <a className="nav-link" href="#">Matches</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li> 
                
      */}
  </div>
)
}

export default Root;
