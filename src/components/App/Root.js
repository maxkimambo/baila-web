import React, { Component } from 'react';
import './App.css';
import Heading from '../Header/Header';
import Profile from '../Profile/Profile';


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
