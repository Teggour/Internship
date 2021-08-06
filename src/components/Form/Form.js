import React from "react";

import { MainForm } from "./styled";

function Form({ children, ...props }) {
  return (
    <>
      <MainForm {...props}>{children}</MainForm>
    </>
  );
}

export default Form;
