import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading'; 
import Profile from './components/Profile/Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Profile/>
      </div>
    );
  }
}

export default App;
