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
} = toolkitSlice.actions;
