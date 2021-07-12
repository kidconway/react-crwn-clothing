import React from "react";

import "./LoginRegistration.style.scss";

import Login from "../../Components/Login/Login.component";
import Registration from "../../Components/Registration/Registration.component";

const LoginRegistration = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Registration />
    </div>
  );
};

export default LoginRegistration;
