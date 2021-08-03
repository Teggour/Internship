import React, { useEffect } from "react";
import Post from "../Post/Post";
import style from "./posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  setCurrentPage,
  setFetching,
} from "../../reduxToolkit/toolkitSlice";
import GetPostsAPI from "../../api/GetPostsAPI";

function Posts() {
  const posts = useSelector((state) => state.toolkit.posts);
  const fetching = useSelector((state) => state.toolkit.fetching);
  const currentPage = useSelector((state) => state.toolkit.currentPage);
  const countPosts = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      GetPostsAPI(
        posts,
        countPosts,
        currentPage,
        dispatch,
        getPosts,
        setCurrentPage,
        setFetching
      );
    }
    // eslint-disable-next-line
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
    // eslint-disable-next-line
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight - window.innerHeight ===
      e.target.documentElement.scrollTop
    ) {
      dispatch(setFetching(true));
    }
  };

  return (
    <div className={style.posts}>
      {/* {posts && posts.map((post) => <Post key={post>._id} postData={post} />)} */}

      {posts?.map((post) => (
        <Post key={post._id} postData={post} />
      ))}
    </div>
  );
}

export default Posts;
