import HomeLink from "./HomeLink";
import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <>
      <div className="centered" data-testid="error-message">
        <p>{error}</p>
      </div>
      <HomeLink />
    </>
  );
};

export default ErrorMessage;
