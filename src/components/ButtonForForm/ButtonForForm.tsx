import * as React from "react";
import { FormButton } from "./styled";

interface IProps {
  children: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  // any other props that come into the component
}

const ButtonForForm:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <>
      <FormButton {...props}>{children}</FormButton>
    </>
  );
}

export default ButtonForForm;
