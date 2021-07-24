import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { registerStart } from "../../redux/user/user.actions";

import { SignUpContainer, TitleContainer } from "./registration.styles";

export const Registration = ({ registerStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    registerStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <TitleContainer>I do not have an account</TitleContainer>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">REGISTER</Button>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  registerStart: userCredentils => dispatch(registerStart(userCredentils))
});

export default connect(null, mapDispatchToProps)(Registration);
