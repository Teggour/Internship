import axios from "../axios/axios";

const GetPostForInitial = (postId, setPostData) => {
  axios
    .get(`/posts/${postId}`)
    .then((response) => {
      setPostData({
        title: response.data.title,
        descr: response.data.description,
        text: response.data.fullText,
      });
    })
    .catch((error) => {
      console.warn(error);
    });
};

export default GetPostForInitial;
