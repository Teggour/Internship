import * as React from "react";
import { FormInput } from "./styled";

interface IProps {
  children: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
  // any other props that come into the component
}

const InputForForm:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <>
      <FormInput {...props}>{children}</FormInput>
    </>
  );
}

export default InputForForm;
