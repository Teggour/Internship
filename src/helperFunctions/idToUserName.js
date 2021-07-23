import axios from "axios";

export const idToUserName = (id) => {
  let name;

  axios
    .get(`https://nodejs-test-api-blog.herokuapp.com/api/v1/users/${id}`)
    .then((response) => {
      name = response.data.name;
      console.log(name);
    })
    .catch((error) => {
      console.warn(error.response.data.error);
      name = "Unknown";
      console.log(name);
    });

  return {
    name,
  };
};
