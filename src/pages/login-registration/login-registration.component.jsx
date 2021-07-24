import React from "react";

import { LoginAndSignUpContainer } from "./login-registration.styles";

import Login from "../../components/login/login.component";
import Registration from "../../components/registration/registration.component";

const LoginRegistration = () => {
  return (
    <LoginAndSignUpContainer>
      <Login />
      <Registration />
    </LoginAndSignUpContainer>
  );
};

export default LoginRegistration;
