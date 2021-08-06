import axios from "../axios/axios";

const UpdateUserAPI = (id, name, setMessage, dispatch, setCurrentUserName, setOnButtonClick) => {
  axios
    .patch(`users/${id}`, {
      name: name,
    })
    .then((response) => {
      setMessage("Update success!");
      localStorage.setItem("userName", response.data.name);
      dispatch(setCurrentUserName(response.data.name));
      setOnButtonClick(false);
    })
    .catch((error) => {
      console.error(error.response.data.error);
      setMessage(error.response.data.error + "!");
      setOnButtonClick(false);
    });
};

export default UpdateUserAPI;
