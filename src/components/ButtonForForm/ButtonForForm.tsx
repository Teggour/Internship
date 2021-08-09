import * as React from "react";
import { FormButton } from "./styled";

interface IProps {
  children: any;
  // any other props that come into the component
}

function ButtonForForm({ children, ...props }: IProps) {
  return (
    <>
      <FormButton {...props}>{children}</FormButton>
    </>
  );
}

export default ButtonForForm;
