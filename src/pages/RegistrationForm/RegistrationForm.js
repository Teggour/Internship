import React, { useState, useEffect } from "react";
import { useInput } from "../../myHooks/useInput";
import { useDispatch } from "react-redux";
import RegistrationAPI from "../../api/RegistrationAPI";
import { FormErrorMessage } from "../../StyleComponents/StyledForm";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";

function RegistrationForm() {
  const name = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const [message, setMessage] = useState("");
  const [onButtonClick, setOnButtonClick] = useState(false);

  const dispatch = useDispatch();

  const clickBtn = (e) => {
    e.preventDefault();

    if (!onButtonClick) {
      setOnButtonClick(true);
      RegistrationAPI(
        dispatch,
        email,
        password,
        name,
        setMessage,
        setOnButtonClick
      );
    }
  };

  useEffect(() => {
    return setOnButtonClick;
  }, [setOnButtonClick]);

  return (
    <React.Fragment>
      <Form>
        <Title>Registration:</Title>

        <FormErrorMessage>{message}</FormErrorMessage>

        {name.isDirty && name.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {name.isDirty && name.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {name.isDirty && name.maxLengthError && (
          <FormErrorMessage>Incorrect length... (Too long)!</FormErrorMessage>
        )}
        <Input
          type="text"
          name="name"
          placeholder="Enter name..."
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          required
        ></Input>

        {email.isDirty && email.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {email.isDirty && email.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {email.isDirty && email.emailError && (
          <FormErrorMessage>Incorrect email!</FormErrorMessage>
        )}
        <Input
          type="text"
          name="email"
          placeholder="Enter email..."
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          required
        ></Input>

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
          Registration
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default RegistrationForm;
