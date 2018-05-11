import React from "react";
import "./App.css";
import Heading from "../Header/Header";
import Suggestions from "../Suggestions/Suggestions";

import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../About/About";
import Matches from "../Matches";
import Settings from "../Settings";
import ProfileCardDetailed from "../ProfileCardDetailed/ProfileCardDetailed";

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
