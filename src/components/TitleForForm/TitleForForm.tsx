import * as React from "react";
import { FormTitle } from "./styled";

interface IProps {
  children: React.FC<React.HTMLAttributes<HTMLElement>>;
}

const TitleForForm:React.FC<IProps> = ({ children, ...props }) => {
  return (
    <>
      <FormTitle {...props}>{children}</FormTitle>
    </>
  );
}

export default TitleForForm;
