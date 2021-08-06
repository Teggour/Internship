import axios from "../axios/axios";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../reduxToolkit/toolkitSlice";

const AuthAPI = (email, password, setMessage, dispatch, setOnButtonClick) => {
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
      setOnButtonClick(false);
    });
};

export default AuthAPI;
