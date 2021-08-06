import React from "react";
import { FormButton } from "./styled";

function ButtonForForm({ children, ...props }) {
  return (
    <>
      <FormButton {...props}>{children}</FormButton>
    </>
  );
}

export default ButtonForForm;
