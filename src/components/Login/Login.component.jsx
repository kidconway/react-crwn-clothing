import React from "react";

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./Login.style.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log("Login component ", err.message);
    }
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
            <Button type="submit">Login</Button>
            <Button type="button" onClick={signInWithGoogle} isGoogleLogin>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
