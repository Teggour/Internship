import styled from "styled-components"

export const MainForm = styled.form`
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

export const FormTitle = styled.h2`
  font: small-caps bold 32px/1 sans-serif;
  margin: 30px 0 10px 0;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
`;

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

export const FormErrorMessage = styled.div`
  margin-top: 5px;
  color: rgba(255, 0, 0, 0.95);
`;
