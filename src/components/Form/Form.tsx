import * as React from "react";

import { MainForm } from "./styled";

interface IProps {
  children: React.FC<React.FormHTMLAttributes<HTMLFormElement>>;
  // any other props that come into the component
}

const Form:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <>
      <MainForm {...props}>{children}</MainForm>
    </>
  );
}

export default Form;
