import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
