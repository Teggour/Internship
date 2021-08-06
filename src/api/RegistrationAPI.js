import axios from "../axios/axios";
import AuthAPI from "./AuthAPI";

const RegistrationAPI = (dispatch, email, password, name, setMessage, setOnButtonClick) => {
  axios
    .post("/users", {
      email: email,
      password: password,
      name: name,
    })
    .then((response) => {
      setMessage("Succes create account!");
    })
    .then(() => {
      AuthAPI(email, password, setMessage, dispatch, setOnButtonClick);
    })
    .catch((error) => {
      console.log(error);
      setMessage(error.response.data.error[0].message + "!");
      setOnButtonClick(false);
    });
};

export default RegistrationAPI;
