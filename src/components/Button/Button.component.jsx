import React from "react";

import "./Button.styles.scss";

const Button = ({ children, isGoogleLogin, ...args }) => {
  return (
    <button
      className={`${isGoogleLogin ? "google-sign-in" : ""} custom-button`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
