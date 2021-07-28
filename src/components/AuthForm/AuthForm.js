import React, { useState } from "react";
import { useInput } from "../../myHooks/useInput";
import style from "./form.module.css";
import axios from "../../axios/axios";
import { useDispatch } from "react-redux";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../../reduxToolkit/toolkitSlice";

function AuthForm() {
  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const clickBtn = (e) => {
    e.preventDefault();

    axios
      .post("/auth", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        localStorage.setItem("jwtToken", response.data.token);

        axios.get("/auth/user").then((response) => {
          localStorage.setItem("userId", response.data._id);
          localStorage.setItem("userName", response.data.name);
          dispatch(setCurrentUserId(response.data._id));
          dispatch(setCurrentUserName(response.data.name));
          setMessage(`Welcome, ${response.data.name}!`);
        });
      })
      .catch((error) => {
        console.error(error.response.data.error);
        setMessage(error.response.data.error + "!");
      });
  };

  return (
    <React.Fragment>
      <form className={style.form}>
        <h2>Authorization:</h2>

        <div className={style.error}>{message}</div>

        {email.isDirty && email.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {email.isDirty && email.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {email.isDirty && email.emailError && (
          <div className={style.error}>Incorrect email!</div>
        )}
        <input
          className={style.input}
          type="text"
          name="email"
          placeholder="Enter email..."
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          required
        ></input>

        {password.isDirty && password.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {password.isDirty && password.maxLengthError && (
          <div className={style.error}>Incorrect length... (Too long)!</div>
        )}
        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="Enter password..."
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          required
        ></input>

        <button
          className={style.btn}
          type="submit"
          disabled={!email.inputValid || !password.inputValid}
          onClick={clickBtn}
        >
          Log In
        </button>
      </form>
    </React.Fragment>
  );
}

export default AuthForm;
