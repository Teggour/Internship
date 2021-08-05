import React, { useState } from "react";
import { useInput } from "../../myHooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserName } from "../../reduxToolkit/toolkitSlice";
import UpdateUserAPI from "../../api/UpdateUserAPI";
import { FormErrorMessage } from "../../StyleComponents/StyledForm";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";

function UpdateProfileUser(props) {
  const id = props.match.params.userId;
  const userName = useSelector((state) => state.toolkit.currentUserName);

  const name = useInput(userName, {
    isEmpty: true,
    minLength: 4,
    maxLength: 8,
  });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const clickBtn = (e) => {
    e.preventDefault();

    UpdateUserAPI(id, name, setMessage, dispatch, setCurrentUserName);
  };

  return (
    <React.Fragment>
      <Form>
        <Title>Update username:</Title>

        <FormErrorMessage>{message}</FormErrorMessage>

        {name.isDirty && name.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {name.isDirty && name.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {name.isDirty && name.emailError && (
          <FormErrorMessage>Incorrect email!</FormErrorMessage>
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

        <Button type="submit" disabled={!name.inputValid} onClick={clickBtn}>
          Update
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default UpdateProfileUser;
