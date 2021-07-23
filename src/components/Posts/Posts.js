import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import store from "../../redux/main";
import axios from "../../axios/axios";
import style from "./posts.module.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.warn(error.response.data.message);
      });
  }, []);

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
