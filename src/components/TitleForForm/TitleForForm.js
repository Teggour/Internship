import React from "react";
import styled from "styled-components";

const FormTitle = styled.h2`
  font: small-caps bold 32px/1 sans-serif;
  margin: 30px 0 10px 0;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
`;

function TitleForForm({ children, ...props }) {
  return (
    <>
      <FormTitle {...props}>{children}</FormTitle>
    </>
  );
}

export default TitleForForm;
