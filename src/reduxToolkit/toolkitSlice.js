import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    posts: [],
    fetching: true,
    currentPage: 0,
    currentUserId: localStorage.getItem("userId") || null,
    currentUserName: localStorage.getItem("userName") || null,
  },
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter(post => post._id !== postId.payload);
    },
    // addPost(state, post) {
    //   state.posts.push(post.payload);
    // },
    updatePost(state, postId) {
      // state.posts = state.posts.map(post => post._id == postId.payload ?  : );
    },
    setFetching(state, action) {
      state.fetching = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentUserId(state, action) {
      state.currentUserId = action.payload;
    },
    setCurrentUserName(state, action) {
      state.currentUserName = action.payload;
    },
  },
});

export default toolkitSlice.reducer;

export const {
  getPosts,
  setFetching,
  setCurrentPage,
  setCurrentUserId,
  setCurrentUserName,
  deletePost,
  updatePost,
  // addPost,
} = toolkitSlice.actions;
