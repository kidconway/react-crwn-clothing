import React from "react";

import "./Button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...args }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
