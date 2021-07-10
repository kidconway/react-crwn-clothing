import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
// import HatsPage from "./pages/HatsPage/HatsPage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import LoginRegistration from "./pages/LoginRegistration/LoginRegistration.component";
import { auth } from "./firebase/firebase.utils";

import Header from "./components/Header/Header.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: false
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log("user", user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.CurrentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login-registration"
            component={LoginRegistration}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
