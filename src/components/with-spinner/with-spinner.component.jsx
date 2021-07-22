import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

// This is a Higher Ordered Component.  Wrap container with spinner component
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
