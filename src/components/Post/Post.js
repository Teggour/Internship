import React from "react";
import style from "./post.module.css";

function Post({ postData }) {
  let { title, descrition, postedBy } = postData;

  return (
    <div className={style.post}>
      <h2>{title}</h2>
      <p>{descrition}</p>
      <h5>{postedBy}</h5>
    </div>
  );
}

export default Post;
