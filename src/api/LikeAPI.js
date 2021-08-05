import axios from "../axios/axios";

const LikeAPI = (
  postId,
  postLikes,
  currentUserId,
  setPostLikes,
  setOnButtonClick
) => {
  axios
    .put(`/posts/like/${postId}`)
    .then((response) => {
      console.log(response.data.message);
      const newLikes = postLikes.includes(currentUserId)
        ? postLikes.filter((userId) => userId !== currentUserId)
        : [...postLikes, currentUserId];

      setPostLikes(newLikes);
      setOnButtonClick(false);
    })
    .catch((error) => {
      console.warn(error);
      setOnButtonClick(false);
    });
};

export default LikeAPI;
