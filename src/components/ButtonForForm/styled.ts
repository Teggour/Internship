import styled from "styled-components";

export const FormButton = styled.button`
  height: 40px;
  font: small-caps bold 20px/1 sans-serif;
  padding: 5px 10px;
  font-weight: bold;
  margin: 20px 0px 15px 0px;
  min-width: 33.3%;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 200, 0.9);
  text-transform: uppercase;
  background: darkblue;
  color: rgba(255, 255, 255, 0.9);
  transition: linear 0.15s;

  &:hover {
    font-size: 24px;
    background: rgb(0, 0, 110);
  }
`;
