import React, { useState, useEffect } from "react";
import style from "./post.module.css";
import axios from "../../axios/axios";

function Post({ postData }) {
  const { title, description, postedBy, _id } = postData;
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`/users/${postedBy}`)
  //     .then((response) => {
  //       setName(response.data.name ? response.data.name : "NoName");
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //       setName("Unknown");
  //     });
  // }, []);

  return (
    <div className={style.post}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={style.descr}>
        <h5>Author: {postedBy}</h5>
        <h5>Post Id: {_id}</h5>
      </div>
      <a href="">Read more...</a>
    </div>
  );
}

export default Post;
