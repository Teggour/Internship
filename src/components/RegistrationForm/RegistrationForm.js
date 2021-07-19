import React from "react";
import style from "./style.module.css";


function RegistrationForm() {
  const checkForm = (event) => {
    console.log("checking...");
    console.log(`event:${event}`);
  }

  return (
    <React.Fragment>
      <form
        className={style.form}
        onSubmit={checkForm}
      >
        <input
          className={style.input}
          type="text"
          name="email"
          placeholder="Enter email..."
          required
        ></input>

        <input
          className={style.input}
          type="password"
          name="password"
          placeholder="Enter password..."
          required
        ></input>

        <input
          className={style.btn}
          type="submit"
          name="submit"
          value="Log In"
        ></input>
      </form>
    </React.Fragment>
  );
}

export default RegistrationForm;
