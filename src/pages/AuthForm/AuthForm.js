import React, { useEffect, useState } from "react";
import { useInput } from "../../myHooks/useInput";
import { useDispatch } from "react-redux";
import AuthAPI from "../../api/AuthAPI";

import Input from '../../components/InputForForm/InputForForm';
import Button from '../../components/ButtonForForm/ButtonForForm';
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";

import {
  FormErrorMessage,
} from "../../StyleComponents/StyledForm";

function AuthForm() {
  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const [message, setMessage] = useState("");
  const [onButtonClick, setOnButtonClick] = useState(false);

  const dispatch = useDispatch();

  const clickBtn = (e) => {
    e.preventDefault();

    if (!onButtonClick) {
      console.log("click");
      setOnButtonClick(true);

      AuthAPI(email, password, setMessage, dispatch, setOnButtonClick);
    }
  };

  useEffect(() => {
    return setOnButtonClick;
  }, [setOnButtonClick]);

  return (
    <React.Fragment>
      <Form>
        <Title>Authorization:</Title>

        <FormErrorMessage>{message}</FormErrorMessage>

        {email.isDirty && email.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {email.isDirty && email.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {email.isDirty && email.emailError && (
          <FormErrorMessage>Incorrect email!</FormErrorMessage>
        )}

        <Input type="text"
          name="email"
          placeholder="Enter email..."
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          required/>

        {password.isDirty && password.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {password.isDirty && password.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {password.isDirty && password.maxLengthError && (
          <FormErrorMessage>Incorrect length... (Too long)!</FormErrorMessage>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          required
        ></Input>

        <Button
          type="submit"
          disabled={!email.inputValid || !password.inputValid}
          onClick={clickBtn}
        >
          Log In
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default AuthForm;
