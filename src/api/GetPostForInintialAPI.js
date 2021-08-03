import axios from "../axios/axios";

const GetPostForInitial = (postId, title, description, fullText) => {
  axios
    .get(`/posts/${postId}`)
    .then((response) => {
      title.changeValue(response.data.title);
      description.changeValue(response.data.description);
      fullText.changeValue(response.data.fullText);
    })
    .catch((error) => {
      console.warn(error);
    });
};

export default GetPostForInitial;
