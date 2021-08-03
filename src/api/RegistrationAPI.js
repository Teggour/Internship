import axios from "../axios/axios";
import AuthAPI from "./AuthAPI";

const RegistrationAPI = (dispatch, email, password, name, setMessage) => {
  axios
    .post("/users", {
      email: email.value,
      password: password.value,
      name: name.value,
    })
    .then((response) => {
      setMessage("Succes!");
    })
    .then(() => {
      AuthAPI(email, password, setMessage, dispatch);
    })
    .catch((error) => {
      console.warn(error.response.data.error);
      setMessage(error.response.data.error + "!");
    });
};

export default RegistrationAPI;
