import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage.component";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import LoginRegistration from "./pages/LoginRegistration/LoginRegistration.component";

import { auth } from "./firebase/Firebase.utils";
import { setCurrentUser } from "./redux/User/User.actions";

import { selectCurrentUser } from "./redux/User/User.selectors";

import { createUserProfileDocument } from "./firebase/Firebase.utils";

import Header from "./components/Header/Header.component";

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
