import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import axios from "../../axios/axios";
import img from "../../Images/default_img_for_avatar.png";

function ProfileUser(props) {
  const id = props.id;
  const [userData, setUserData] = useState({});

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
        {/* <img src={image && img}/> */}
        <img
          src={avatar}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = img;
          }}
          alt="Avatar"
        />

        <h5>Name: {name}</h5>
        <h5>Email: {email}</h5>
        <h5>Date created: {dateCreated}</h5>

        <button>Update</button>
      </div>
    </>
  );
}

export default ProfileUser;
