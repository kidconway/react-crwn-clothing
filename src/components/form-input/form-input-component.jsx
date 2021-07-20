import React from "react";

import {
  FormInputLabel,
  GroupContainer,
  FormInputContainer
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...args }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...args} />
    {label ? (
      <FormInputLabel className={`${args.value.length ? "shrink" : ""}`}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
