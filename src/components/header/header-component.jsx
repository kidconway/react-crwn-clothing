import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase-utils";

import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon-component";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";

import "./header-styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {!currentUser ? (
          <Link className="option" to="/login-registration">
            LOGIN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            LOGOUT
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);