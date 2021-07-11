import React from "react";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./Login.style.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <div className="buttons">
            <Button type="submit">Submit Form</Button>
            <Button onClick={signInWithGoogle} isGoogleLogin>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
