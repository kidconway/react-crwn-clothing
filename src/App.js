import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import ShopPage from "./pages/shop/shop.component";
import LoginRegistration from "./pages/login-registration/login-registration.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import Header from "./components/header/header.component";

const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

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
            currentUser ? <Redirect to={"/"} /> : <LoginRegistration />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
