import React, { useEffect, useState } from "react";
import { useInput } from "../../myHooks/useInput";
import style from "./form.module.css";
import axios from "../../axios/axios";
import { useDispatch } from "react-redux";
import {
  setCurrentUserName,
  setCurrentUserId,
} from "../../reduxToolkit/toolkitSlice";

function UpdatePostForm({ postId }) {
  const title = useInput("", { isEmpty: true, minLength: 5, maxLength: 36 });
  const description = useInput("", { isEmpty: true, minLength: 5, maxLength: 36 });
  const fullText = useInput("", { isEmpty: true, minLength: 20, maxLength: 54 });
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  }, [])

  // const {
  //   description,
  //   fullText,
  //   title
  // } = post;

  const clickBtn = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <form className={style.form}>
        <h2>Update post:</h2>

        <div className={style.error}>{message}</div>

        {title.isDirty && title.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {title.isDirty && title.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {title.isDirty && title.maxLengthError && (
          <div className={style.error}>Incorrect length... (Too long)!</div>
        )}
        <input
          className={style.input}
          type="text"
          name="title"
          placeholder="Enter title..."
          value={post.title}
          onChange={(e) => title.onChange(e)}
          onBlur={(e) => title.onBlur(e)}
          required
        ></input>

        {description.isDirty && description.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {description.isDirty && description.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {description.isDirty && description.maxLengthError && (
          <div className={style.error}>Incorrect length... (Too long)!</div>
        )}
        <input
          className={style.input}
          type="text"
          name="description"
          placeholder="Enter description..."
          value={post.description}
          onChange={(e) => description.onChange(e)}
          onBlur={(e) => description.onBlur(e)}
          required
        ></input>

        {fullText.isDirty && fullText.isEmpty && (
          <div className={style.error}>Field can't is empty!</div>
        )}
        {fullText.isDirty && fullText.minLengthError && (
          <div className={style.error}>Incorrect length... (Too short)!</div>
        )}
        {fullText.isDirty && fullText.maxLengthError && (
          <div className={style.error}>Incorrect length... (Too long)!</div>
        )}
        <input
          className={style.input}
          type="text"
          name="fullText"
          placeholder="Enter text..."
          value={post.fullText}
          onChange={(e) => fullText.onChange(e)}
          onBlur={(e) => fullText.onBlur(e)}
          required
        ></input>

        <button
          className={style.btn}
          type="submit"
          disabled={!title.inputValid || !description.inputValid || !fullText.inputValid}
          onClick={clickBtn}
        >
          Update
        </button>
      </form>
    </React.Fragment>
  );
}

export default UpdatePostForm;
