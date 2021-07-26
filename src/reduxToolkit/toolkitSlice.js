import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    posts: [],
    allPosts: [],
    fetching: true,
    currentPage: 0,
    currentUserId: null,
    currentUserName: null,
  },
  reducers: {
    getAllPosts(state, action) {
      state.allPosts = action.payload;
    },
    getPosts(state, action) {
      state.posts = action.payload;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    removePost(state, action) {
      state.posts.filter();
    },
    updatePost(state, action) {
      state.posts.filter();
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
  getAllPosts,
  getPosts,
  addPost,
  removePost,
  updatePost,
  setFetching,
  setCurrentPage,
  setCurrentUserId,
  setCurrentUserName,
} = toolkitSlice.actions;
