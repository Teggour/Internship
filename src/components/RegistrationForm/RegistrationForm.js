import React, { useEffect, useState } from "react";
import { useInput } from "../../myHooks/useInput";
import style from "./form.module.css";
import axios from "../../axios/axios";

function RegistrationForm() {
  const name = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const email = useInput("", { isEmpty: true, minLength: 4, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 4, maxLength: 8 });
  const [message, setMessage] = useState("");

  const clickBtn = (e) => {
    e.preventDefault();

    axios
      .post("https://nodejs-test-api-blog.herokuapp.com/api/v1/users", {
        email: email.value,
        password: password.value,
        name: name.value,
      })
      .then((response) => {
        setMessage("Succes!");
        console.log(response.data.token);
      })
      .then(() => {
        axios
          .post("https://nodejs-test-api-blog.herokuapp.com/api/v1/auth", {
            email: email.value,
            password: password.value,
          })
          .then((response) => {
            setMessage("Welcome!");
            console.log(response.data.token);
            localStorage.setItem("jwtToken", response.data.token);
          });
      })
      .catch((error) => {
        console.warn(error.response.data.error);
        setMessage(error.response.data.error + "!");
      });
  };

  return (
    <React.Fragment>
      <form className={style.form}>
        <h2>Registration:</h2>

        <div className={style.error}>{message}</div>

        {name.isDirty && name.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {name.isDirty && name.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {name.isDirty && name.maxLengthError && (
          <div className={style.error}>Incorrect length... (Too long)!</div>
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
          Registration
        </button>
      </form>
    </React.Fragment>
  );
}

export default RegistrationForm;
