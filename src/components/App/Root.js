import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../About/About";
import Heading from "../Header/Header";
import Matches from "../Matches";
import ProfileCardDetailed from "../ProfileCardDetailed/ProfileCardDetailed";
import Settings from "../Settings";
import Suggestions from "../Suggestions/Suggestions";
import Profile from './../Profile';
import "./App.css";


// Root for the app compoment
const Root = () => {
  return (
    <div className="App">
      <Heading />
      <Route exact path="/" component={Suggestions} />
      <Route path="/about" component={About} />
      <Route path="/matches" component={Matches} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile/:id" component={ProfileCardDetailed} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

// exposed component for wrapping Redux provider around
const AppRoot = () => {
  return (
    <Router>
      <Root />
    </Router>
  );
};

export default AppRoot;
