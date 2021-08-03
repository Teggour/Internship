import axios from "../axios/axios";

const DeleteUserApi = (id) => {
  axios
    .delete(`users/${id}`)
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((error) => {
      console.error(error.response.data.error);
    });
};

export default DeleteUserApi;
