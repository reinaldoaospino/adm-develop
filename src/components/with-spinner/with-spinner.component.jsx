import React from "react";
import SpinnerComponent from "../spinner/spinner.component";

const WithSpinnerGet = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  const WithError = WithErrorMessage(WrappedComponent);
  return !isLoading ? (
    <SpinnerComponent />
  ) : (
    <WithError error={true} {...otherProps} />
  );
};

const WithErrorMessage = (Compoenent) => ({ error, ...otherProps }) => {
  return (
    <div>
      {error ? (
        <p>Hubo un error en la consulta</p>
      ) : (
        <Compoenent {...otherProps} />
      )}
    </div>
  );
};
export default WithSpinnerGet;
