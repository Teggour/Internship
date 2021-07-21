import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import store from "../../redux/main";
import axios from "axios";
import style from "./posts.module.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
    //   .then((response) => response.json())
    //   .then(
    //     (data) => {
    //       console.log(data);
    //     //   store.dispatch(changePostList(data))
    //     },

    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    axios
      .get("https://nodejs-test-api-blog.herokuapp.com/api/v1/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className={style.posts}>
      {posts ? posts.map((post) => <Post postData={post} />) : null}
    </div>
  );
}

export default Posts;
