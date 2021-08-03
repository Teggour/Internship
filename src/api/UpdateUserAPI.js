import axios from "../axios/axios";

const UpdateUserAPI = (id, name, setMessage, dispatch, setCurrentUserName) => {
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

export default UpdateUserAPI;
