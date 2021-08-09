import React, { useState, useEffect } from "react";
import style from "./fullPost.module.css";
import img from "../../Images/default_img_for_blog.png";
import editImg from "../../Images/edit_img.svg";
import deleteImg from "../../Images/delete_img.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Like from "../../components/Like/Like";
import GetPostById from "../../api/GetPostByIdAPI";
import DeletePostAPI from "../../api/DeletePostApi";
import LikeAPI from "../../api/LikeAPI";

function FullPost(props) {
  const [post, setPost] = useState({});
  const [postLikes, setPostLikes] = useState([]);
  const [onButtonClick, setOnButtonClick] = useState(false);
  const currentUserId = useSelector((state) => state.toolkit.currentUserId);
  const postId = props.match.params.postId;

  const dispatch = useDispatch();

  const clickLike = () => {
    if (!onButtonClick && currentUserId) {
      setOnButtonClick(true);

      LikeAPI(postId, postLikes, currentUserId, setPostLikes, setOnButtonClick);
    }
  };

  const clickDeleteBtn = () => {
    DeletePostAPI(postId, dispatch);
  };

  useEffect(() => {
    GetPostById(postId, setPost, setPostLikes);
    // eslint-disable-next-line
  }, []);

  const { dateCreated, description, fullText, image, postedBy, title, _id } =
    post;

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
            <div onClick={clickLike}>
              <Like
                newfill={postLikes?.includes(currentUserId) ? "red" : "white"}
              />
            </div>
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
              <button title="Edit">
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
