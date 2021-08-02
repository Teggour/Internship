import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    posts: [],
    fetching: true,
    currentPage: 0,
    currentUserId: localStorage.getItem("userId") || null,
    currentUserName: localStorage.getItem("userName") || "",
  },
  reducers: {
    getPosts(state, action) {
      state.posts = action.payload;
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
    },
    updatePost(state, action) {
      state.posts = state.posts.map((post) => {
        return post._id == action.payload.id ? action.payload.newPost : post;
      });
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
} = toolkitSlice.actions;
