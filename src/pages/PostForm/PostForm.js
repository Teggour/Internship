import React, { useState, useEffect } from "react";
import { useInput } from "../../myHooks/useInput";
import { useDispatch } from "react-redux";
import { updatePost } from "../../reduxToolkit/toolkitSlice";
import CreatePostAPI from "../../api/CreatePostAPI";
import UpdatePostAPI from "../../api/UpdatePostAPI";
import GetPostForInitial from "../../api/GetPostForInintialAPI";
import {
  MainForm,
  FormTitle,
  FormInput,
  FormButton,
  FormErrorMessage,
} from "../../StyleComponents/StyledForm";

function PostForm(props) {
  const postId = props.match.params.postId;
  const [onButtonClick, setOnButtoClick] = useState(false);

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (postId) {
      GetPostForInitial(postId, title, description, fullText);
    }
    // eslint-disable-next-line
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

    if (!onButtonClick) {
      setOnButtoClick(true);

      console.log("click");

      if (e.target.value === "Create") {
        CreatePostAPI(
          title,
          description,
          fullText,
          setMessage,
          setOnButtoClick
        );
      } else if (e.target.value === "Update") {
        UpdatePostAPI(
          postId,
          title,
          description,
          fullText,
          setMessage,
          dispatch,
          updatePost,
          setOnButtoClick
        );
      }
    }
  };

  return (
    <React.Fragment>
      <MainForm>
        <FormTitle>{(postId && "Update post:") || "Create post:"}</FormTitle>

        <FormErrorMessage>{message}</FormErrorMessage>

        {title.isDirty && title.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {title.isDirty && title.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {title.isDirty && title.maxLengthError && (
          <FormErrorMessage>Incorrect length... (Too long)!</FormErrorMessage>
        )}
        <FormInput
          type="text"
          name="title"
          placeholder="Enter title..."
          value={title.value}
          onChange={(e) => title.onChange(e)}
          onBlur={(e) => title.onBlur(e)}
          required
        ></FormInput>

        {description.isDirty && description.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {description.isDirty && description.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {description.isDirty && description.maxLengthError && (
          <FormErrorMessage>Incorrect length... (Too long)!</FormErrorMessage>
        )}
        <FormInput
          type="text"
          name="description"
          placeholder="Enter description..."
          value={description.value}
          onChange={(e) => description.onChange(e)}
          onBlur={(e) => description.onBlur(e)}
          required
        ></FormInput>

        {fullText.isDirty && fullText.isEmpty && (
          <FormErrorMessage>Field can't is empty!</FormErrorMessage>
        )}
        {fullText.isDirty && fullText.minLengthError && (
          <FormErrorMessage>Incorrect length... (Too short)!</FormErrorMessage>
        )}
        {fullText.isDirty && fullText.maxLengthError && (
          <FormErrorMessage>Incorrect length... (Too long)!</FormErrorMessage>
        )}
        <FormInput
          type="text"
          name="fullText"
          placeholder="Enter text..."
          value={fullText.value}
          onChange={(e) => fullText.onChange(e)}
          onBlur={(e) => fullText.onBlur(e)}
          required
        ></FormInput>

        <FormButton
          type="submit"
          disabled={
            !title.inputValid || !description.inputValid || !fullText.inputValid
          }
          onClick={clickBtn}
          value={(postId && "Update") || "Create"}
        >
          {(postId && "Update") || "Create"}
        </FormButton>
      </MainForm>
    </React.Fragment>
  );
}

export default PostForm;
