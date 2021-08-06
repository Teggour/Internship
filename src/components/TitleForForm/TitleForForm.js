import React from "react";
import { FormTitle } from "./styled";

function TitleForForm({ children, ...props }) {
  return (
    <>
      <FormTitle {...props}>{children}</FormTitle>
    </>
  );
}

export default TitleForForm;
