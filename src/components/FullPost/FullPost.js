import React, { useState, useEffect } from "react";
import style from "./fullPost.module.css";
import axios from "../../axios/axios";
import img from "../../Images/default_img_for_blog.png";
import editImg from "../../Images/edit_img.svg";
import deleteImg from "../../Images/delete_img.svg";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../reduxToolkit/toolkitSlice";
import { Link } from "react-router-dom"

function FullPost(props) {
  const [post, setPost] = useState({});
  const currentUserId = useSelector((state) => state.toolkit.currentUserId);
  const postId = props.match.params.postId;

  const dispatch = useDispatch();

  const clickEditBtn = () => {
    console.log("edit");
  };

  const clickDeleteBtn = () => {
    axios
      .delete(`posts/${postId}`)
      .then((response) => {
        console.log(response.data.message);
        dispatch(deletePost(postId));
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.warn(error);
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
          src={image ? image : img}
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
        <div className={style.buttons}>
          {postedBy === currentUserId && (
            <Link to={`${props.location.pathname}/edit`} className={style.link}>
              <button title="Edit" onClick={clickEditBtn}>
                <img src={editImg} alt="Edit"/>
              </button>
            </Link>
          )}
          {postedBy === currentUserId && (
            <button title="Delete" onClick={clickDeleteBtn}>
              <img src={deleteImg} alt="Delete" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default FullPost;
