import React from "react";
import styled from "styled-components";

const MainForm = styled.form`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid black;
  border-radius: 50px;
`;

function Form({ children, ...props }) {
  return (
    <>
      <MainForm {...props}>{children}</MainForm>
    </>
  );
}

export default Form;
