import axios from "../axios/axios";
import { deletePost } from "../reduxToolkit/toolkitSlice";

const DeletePostAPI = (postId, dispatch) => {
  axios
    .delete(`/posts/${postId}`)
    .then((response) => {
      console.log(response.data.message);
      dispatch(deletePost(postId));
    })
    .catch((error) => {
      console.error(error);
    });
};

export default DeletePostAPI;
