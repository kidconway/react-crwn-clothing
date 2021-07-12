import React from "react";

import "./FormInput.style.scss";

const FormInput = ({ handleChange, label, additionalProps }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...additionalProps}
      />
      {label ? (
        <label
          className={`${
            additionalProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
