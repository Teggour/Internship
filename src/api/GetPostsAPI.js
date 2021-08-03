import axios from "../axios/axios";

const GetPostsAPI = (
  posts,
  countPosts,
  currentPage,
  dispatch,
  getPosts,
  setCurrentPage,
  setFetching
) => {
  axios
    .get(`/posts?limit=${countPosts}&skip=${countPosts * currentPage}`)
    .then((response) => {
      dispatch(getPosts([...posts, ...response.data]));
      dispatch(setCurrentPage(currentPage + 1));
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => dispatch(setFetching(false)));
};

export default GetPostsAPI;
