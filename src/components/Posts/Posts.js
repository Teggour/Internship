import React, { useEffect } from "react";
import Post from "../Post/Post";
import axios from "../../axios/axios";
import style from "./posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  setCurrentPage,
  setFetching,
} from "../../reduxToolkit/toolkitSlice";

function Posts() {
  const posts = useSelector((state) => state.toolkit.posts);
  const fetching = useSelector((state) => state.toolkit.fetching);
  const currentPage = useSelector((state) => state.toolkit.currentPage);
  const countPosts = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      axios
        .get(`/posts?limit=${countPosts}&skip=${countPosts * currentPage}`)
        .then((response) => {
          console.log(response);
          dispatch(getPosts([...posts, ...response.data]));
          dispatch(setCurrentPage(currentPage + 1));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => dispatch(setFetching(false)));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
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
