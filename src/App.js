import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as cors from "cors";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage-component";
import CheckoutPage from "./pages/checkout-page/checkout-page-component";
import ShopPage from "./pages/shop-page/shop-page-component";
import LoginRegistration from "./pages/login-registration/login-registration-component";

import { auth } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user-actions";

import { selectCurrentUser } from "./redux/user/user-selectors";

import { createUserProfileDocument } from "./firebase/firebase-utils";

import Header from "./components/header/header-component";

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
    cors({ origin: true });
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
