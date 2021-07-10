import React from "react";

import "./FormInput.style.scss";

const FormInput = ({ handleChange, label, ...args }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...args}
      />
      {label ? (
        <label
          className={`${args.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
