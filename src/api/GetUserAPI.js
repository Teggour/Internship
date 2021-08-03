import axios from "../axios/axios";

const GetUserAPI = (id, setUserData) => {
  axios
    .get(`/users/${id}`)
    .then((response) => {
      setUserData(response.data);
    })
    .catch((error) => {
      console.error(error.response);
    });
};

export default GetUserAPI;
