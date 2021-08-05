import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import avatarImg from "../../Images/default_img_for_avatar.png";
import editImg from "../../Images/edit_img.svg";
import deleteImg from "../../Images/delete_img.svg";
import quitImg from "../../Images/quit_img.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../../reduxToolkit/toolkitSlice";
import { Link } from "react-router-dom";
import DeleteUserApi from "../../api/DeleteUserAPI";
import GetUserAPI from "../../api/GetUserAPI";

function ProfileUser(props) {
  const id = props.match.params.userId;
  const currentUserId = useSelector((state) => state.toolkit.currentUserId);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const clickEditBtn = () => {
    console.log("edit");
  };

  const clickSignOutBtn = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("jwtToken");

    dispatch(setCurrentUserId(null));
    dispatch(setCurrentUserName(null));
  };

  const clickDeleteBtn = () => {
    DeleteUserApi(id);
  };

  useEffect(() => {
    GetUserAPI(id, setUserData);
  }, [id]);

  const { email, name, dateCreated, avatar } = userData;

  return (
    <>
      <div className={style.profile}>
        <h2>Profile:</h2>
        <img
          src={avatar ? avatar : avatarImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = avatarImg;
          }}
          alt="Avatar"
        />

        <h5>Name: {name}</h5>
        <h5>Email: {email}</h5>
        <h5>Date created: {dateCreated}</h5>

        {id === currentUserId && (
          <div className={style.buttons}>
            <Link to={`${props.location.pathname}/edit`} className={style.link}>
              <button title="Edit" onClick={clickEditBtn}>
                <img src={editImg} alt="Edit" />
              </button>
            </Link>
            <button title="Delete" onClick={clickDeleteBtn}>
              <img src={deleteImg} alt="Delete" />
            </button>
            <button title="SignOut" onClick={clickSignOutBtn}>
              <img src={quitImg} alt="SignOut" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileUser;
