import React, { useState } from "react";
import { useInput } from "../../myHooks/useInput";
import style from "./form.module.css";
import axios from "../../axios/axios";
import {useEffect} from 'react'

function PostForm(props) {
  const postId = props.match.params.postId;

  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (postId) {
      axios
      .get(`/posts/${postId}`)
      .then((response) => {
        title.changeValue(response.data.title);
        description.changeValue(response.data.description);
        fullText.changeValue(response.data.fullText);
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  }, []);

  const title = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 36,
  });
  const description = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 36,
  });
  const fullText = useInput("", {
    isEmpty: true,
    minLength: 20,
    maxLength: 54,
  });

  const clickBtn = (e) => {
    e.preventDefault();

    if (e.target.value === "Create") {
      axios
        .post("/posts", {
          title: title.value,
          description: description.value,
          fullText: fullText.value,
        })
        .then((response) => {
          setMessage("Succes created!");
        })
        .catch((error) => {
          console.error(error.response.data.error);
          setMessage(error.response.data.error + "!");
        });
    }

    if (e.target.value === "Update") {
      axios
        .patch(`/posts/${postId}`, {
          title: title.value,
          description: description.value,
          fullText: fullText.value,
        })
        .then((response) => {
          setMessage("Succes updated!");
        })
        .catch((error) => {
          console.error(error.response.data.error);
          setMessage(error.response.data.error + "!");
        });
    }
  };

  return (
    <React.Fragment>
      <form className={style.form}>
        <h2>
          {(postId && "Update post:") ||
            "Create post:"}
        </h2>

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
          value={title.value}
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
          value={description.value}
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
          value={fullText.value}
          onChange={(e) => fullText.onChange(e)}
          onBlur={(e) => fullText.onBlur(e)}
          required
        ></input>

        <button
          className={style.btn}
          type="submit"
          disabled={
            !title.inputValid || !description.inputValid || !fullText.inputValid
          }
          onClick={clickBtn}
          value={
            (postId && "Update") || "Create"
          }
        >
          {(postId && "Update") || "Create"}
        </button>
      </form>
    </React.Fragment>
  );
}

export default PostForm;
