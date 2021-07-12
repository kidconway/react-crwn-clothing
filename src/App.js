import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage/HomePage.component";
// import HatsPage from "./pages/HatsPage/HatsPage.component";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import LoginRegistration from "./Pages/LoginRegistration/LoginRegistration.component";
import { auth } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/User/User.actions";

import { createUserProfileDocument } from "./Firebase/Firebase.utils";

import Header from "./Components/Header/Header.component";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login-registration"
            render={() =>
              this.props.currentUser ? (
                <Redirect to={"/"} />
              ) : (
                <LoginRegistration />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
