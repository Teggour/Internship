import axios from "../axios/axios";

const UpdatePostAPI = (
  postId,
  title,
  description,
  fullText,
  setMessage,
  dispatch,
  updatePost,
  setOnButtoClick
) => {
  axios
    .patch(`/posts/${postId}`, {
      title: title,
      description: description,
      fullText: fullText,
    })
    .then((response) => {
      setMessage("Succes updated!");

      setOnButtoClick(false)

      dispatch(updatePost({ id: postId, newPost: response.data }));
    })
    .catch((error) => {
      setMessage(error.response.data.error + "!");
      setOnButtoClick(false)
    });
};

export default UpdatePostAPI;
