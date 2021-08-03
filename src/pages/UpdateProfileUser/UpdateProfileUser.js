import React, { useState } from "react";
import { useInput } from "../../myHooks/useInput";
import style from "./form.module.css";
import axios from "../../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserName,
} from "../../reduxToolkit/toolkitSlice";

function UpdateProfileUser(props) {
  const id = props.match.params.userId;
  const userName = useSelector((state) => state.toolkit.currentUserName);

  const name = useInput(userName, { isEmpty: true, minLength: 4, maxLength: 8 });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const clickBtn = (e) => {
    e.preventDefault();

    axios
      .patch(`users/${id}`, {
        name: name.value,
      })
      .then((response) => {
        setMessage("Update success!");
        localStorage.setItem("userName", response.data.name);
        dispatch(setCurrentUserName(response.data.name));
      })
      .catch((error) => {
        console.error(error.response.data.error);
        setMessage(error.response.data.error + "!");
      });
  };

  return (
    <React.Fragment>
      <form className={style.form}>
        <h2>Update username:</h2>

        <div className={style.error}>{message}</div>

        {name.isDirty && name.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {name.isDirty && name.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {name.isDirty && name.emailError && (
          <div className={style.error}>Incorrect email!</div>
        )}
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Enter name..."
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          required
        ></input>

        <button
          className={style.btn}
          type="submit"
          disabled={!name.inputValid}
          onClick={clickBtn}
        >
          Update
        </button>
      </form>
    </React.Fragment>
  );
}

export default UpdateProfileUser;
