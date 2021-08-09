import * as React from "react";
import { FormErrorMessage } from "./styled";

interface IProps {
  children: React.FC<React.HTMLAttributes<HTMLElement>>;
  // any other props that come into the component
}

const ErrorMessageForm:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <>
      <FormErrorMessage {...props}>{children}</FormErrorMessage>
    </>
  );
}

export default ErrorMessageForm;
