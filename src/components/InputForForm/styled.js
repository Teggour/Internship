import styled from "styled-components";

export const FormInput = styled.input`
  padding: 5px;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
  font: caption;
  font-weight: normal;
  font-size: 18px;
  margin: 25px 10px 15px 10px;
  background: none;
  width: 66.6%;
  color: rgba(255, 255, 255, 0.8);

  &:focus {
    box-shadow: 0 0 10px 3px rgb(155, 155, 155);
    border: 3px solid rgba(0, 0, 114, 0.9);
  }

  &::placeholder {
    color: rgba(228, 228, 228, 0.9);
  }
`;
