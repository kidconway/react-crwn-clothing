import React from "react";

import "./button-styles.scss";

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
