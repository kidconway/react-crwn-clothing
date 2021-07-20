import React from "react";

import "./login-registration-style.scss";

import Login from "../../components/login/login-component";
import Registration from "../../components/registration/registration-component";

const LoginRegistration = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Registration />
    </div>
  );
};

export default LoginRegistration;
