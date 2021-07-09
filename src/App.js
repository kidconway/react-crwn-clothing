import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import HatsPage from "./pages/HatsPage/HatsPage.component";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
