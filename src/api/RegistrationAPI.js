import axios from "../axios/axios";
import AuthAPI from "./AuthAPI";

const RegistrationAPI = (dispatch, email, password, name, setMessage, setOnButtonClick) => {
  axios
    .post("/users", {
      email: email.value,
      password: password.value,
      name: name.value,
    })
    .then((response) => {
      setMessage("Succes create account!");
    })
    .then(() => {
      AuthAPI(email, password, setMessage, dispatch, setOnButtonClick);
    })
    .catch((error) => {
      console.warn(error.response.data.error);
      setMessage(error.response.data.error + "!");
      setOnButtonClick(false);
    });
};

export default RegistrationAPI;
