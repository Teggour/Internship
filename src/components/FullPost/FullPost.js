import React, { useState, useEffect } from "react";
import style from "./fullPost.module.css";
import axios from "../../axios/axios";
import img from "../../Images/default_img_for_blog.png";

function FullPost({ postId }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((response) => {
        setPost(response?.data);
      })
      .catch((error) => {
        console.warn(error.response?.data.error);
      });
  }, []);

  const {
    dateCreated,
    description,
    fullText,
    image,
    likes,
    postedBy,
    title,
    _id,
  } = post;

  return (
    <>
      <div className={style.post}>
        {/* <img src={image && img}/> */}
        <img
          src={image}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img;
          }}
          alt="IMG"
        />
        <h2>{title}</h2>
        <h5>({description})</h5>
        <p>{fullText}</p>
        <div className={style.descr}>
          <h5>
            Author: <br /> {postedBy}
          </h5>
          <h5>
            Post Id: <br />
            {_id}
          </h5>
          <h5>
            Likes: <br />
            {likes?.length}
          </h5>
          <h5>
            Date created: <br />
            {dateCreated}
          </h5>
        </div>
      </div>
    </>
  );
}

export default FullPost;
