import axios from "../axios/axios";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../reduxToolkit/toolkitSlice";

const AuthAPI = (email, password, setMessage, dispatch) => {
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
      });
    })
    .catch((error) => {
      setMessage(error.response.data.error + "!");
    });
};

export default AuthAPI;
