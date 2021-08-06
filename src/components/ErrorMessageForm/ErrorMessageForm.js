import React from "react";
import { FormErrorMessage } from "./styled";

function ErrorMessageForm({ children, ...props }) {
  return (
    <>
      <FormErrorMessage {...props}>{children}</FormErrorMessage>
    </>
  );
}

export default ErrorMessageForm;
