import React, { useState } from "react";
import { useInput } from "../../myHooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserName } from "../../reduxToolkit/toolkitSlice";
import UpdateUserAPI from "../../api/UpdateUserAPI";
import {
  MainForm,
  FormTitle,
  FormInput,
  FormButton,
  FormErrorMessage,
} from "../../StyleComponents/StyledForm";

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
      <MainForm>
        <FormTitle>Update username:</FormTitle>

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
        <FormInput
          type="text"
          name="name"
          placeholder="Enter name..."
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          required
        ></FormInput>

        <FormButton
          type="submit"
          disabled={!name.inputValid}
          onClick={clickBtn}
        >
          Update
        </FormButton>
      </MainForm>
    </React.Fragment>
  );
}

export default UpdateProfileUser;
