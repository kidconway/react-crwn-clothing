import React from "react";

import { SignInAndSignUpContainer } from "./login-registration.styles";

import Login from "../../components/login/login.component";
import Registration from "../../components/registration/registration.component";

const LoginRegistration = () => {
  return (
    <SignInAndSignUpContainer>
      <Login />
      <Registration />
    </SignInAndSignUpContainer>
  );
};

export default LoginRegistration;
