import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import axios from "../../axios/axios";
import avatarImg from "../../Images/default_img_for_avatar.png";
import editImg from "../../Images/edit_img.svg";
import deleteImg from "../../Images/delete_img.svg";
import quitImg from "../../Images/quit_img.png";
import { useDispatch } from "react-redux";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../../reduxToolkit/toolkitSlice";
import { Link } from "react-router-dom";

function ProfileUser(props) {
  const id = props.match.params.userId;
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
    axios
      .delete(`users/${id}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error.response);
      });
    return () => axios;
  }, []);

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
      </div>
    </>
  );
}

export default ProfileUser;
