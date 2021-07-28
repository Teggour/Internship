import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import axios from "../../axios/axios";
import avatarImg from "../../Images/default_img_for_avatar.png";
import editImg from "../../Images/edit_img.png";
import deleteImg from "../../Images/delete_img.png";

function ProfileUser(props) {
  const id = props.id;
  const [userData, setUserData] = useState({});

  const clickEditBtn = () => {
    console.log("edit");
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
          <button title="Edit" onClick={clickEditBtn}>
            <img src={editImg} alt="Edit" />
          </button>
          <button title="Delete" onClick={clickDeleteBtn}>
            <img src={deleteImg} alt="Delete" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
