import React, { useState, useEffect } from "react";
import style from "./fullPost.module.css";
import axios from "../../axios/axios";
import img from "../../Images/default_img_for_blog.png";
import editImg from "../../Images/edit_img.svg";
import deleteImg from "../../Images/delete_img.svg";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../reduxToolkit/toolkitSlice";
import { Link } from "react-router-dom";
import Like from "../Like/Like";

function FullPost(props) {
  const [post, setPost] = useState({});
  const [color, setColor] = useState("");
  const [postLikes, setPostLikes] = useState([]);
  const [onButtonClick, setOnButtonClick] = useState(false);
  const currentUserId = useSelector((state) => state.toolkit.currentUserId);
  const postId = props.match.params.postId;

  const dispatch = useDispatch();

  const clickEditBtn = () => {
    console.log("edit");
  };

  const clickLike = () => {
    setOnButtonClick(true);
    console.log("like");
    axios
      .put(`/posts/like/${postId}`)
      .then((response) => {
        console.log(response.data.message);
        const newLikes = postLikes.includes(currentUserId)
          ? postLikes.filter((userId) => userId !== currentUserId)
          : [...postLikes, currentUserId];

        setPostLikes(newLikes);
        setOnButtonClick(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const clickDeleteBtn = () => {
    axios
      .delete(`/posts/${postId}`)
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
        setPostLikes(response.data.likes);
        // postLikes.includes(currentUserId) ? setColor("red") : setColor("black")
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
        <img
          src={image ? image : img}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img;
          }}
          alt="post_img"
        />
        <h2>{title}</h2>
        <h5>({description})</h5>
        <p>{fullText}</p>
        <div className={style.descr}>
          <h5>Author: &nbsp; {postedBy}</h5>
          <h5>Post Id: &nbsp; {_id}</h5>
          <h5>
            {/* <img
              src={likeImg}
              alt="like_img"
              onClick={clickLike}
            /> */}
            <Like
              newfill={postLikes?.includes(currentUserId) ? "red" : "white"}
              onClick={clickLike}
            />
            : &nbsp; {postLikes.length}
          </h5>
          <h5>
            Date created: &nbsp;
            {dateCreated}
          </h5>
        </div>
        <div className={style.buttons}>
          {postedBy === currentUserId && (
            <Link to={`${props.location.pathname}/edit`} className={style.link}>
              <button title="Edit" onClick={clickEditBtn}>
                <img src={editImg} alt="Edit" />
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
