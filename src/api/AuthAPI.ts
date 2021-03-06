import React from "react";
import axios from "../axios/axios";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../reduxToolkit/toolkitSlice";

interface IProps {
    email: string;
    password: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    dispatch: React.Dispatch<any>;
    setOnButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthAPI = (props: IProps) => {
  const { email, password, setMessage, dispatch, setOnButtonClick } = props;

  axios
    .post("/auth", {
      email: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem("jwtToken", response.data.token);

      axios.get("/auth/user").then((response) => {
        localStorage.setItem("userId", response.data._id);
        localStorage.setItem("userName", response.data.name);
        dispatch(setCurrentUserId(response.data._id));
        dispatch(setCurrentUserName(response.data.name));
        setOnButtonClick(false);
      });
    })
    .catch((error) => {
      setMessage(error.response.data.error + "!");
      // console.log(error.response.data.error[0].message);
      setOnButtonClick(false);
    });
};

export default AuthAPI;
