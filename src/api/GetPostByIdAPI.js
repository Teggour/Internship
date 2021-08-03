import axios from "../axios/axios";

const GetPostById = (postId, setPost, setPostLikes) => {
  axios
    .get(`/posts/${postId}`)
    .then((response) => {
      setPost(response.data);
      setPostLikes(response.data.likes);
    })
    .catch((error) => {
      console.warn(error);
    });
};

export default GetPostById;
