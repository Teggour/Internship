import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../reduxToolkit/toolkitSlice";
import CreatePostAPI from "../../api/CreatePostAPI";
import UpdatePostAPI from "../../api/UpdatePostAPI";
import GetPostForInitial from "../../api/GetPostForInintialAPI";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessageForm/ErrorMessageForm";

function PostForm(props) {
  const postId = props.match.params.postId;
  const [onButtonClick, setOnButtoClick] = useState(false);
  const [postData, setPostData] = useState({ title: "", descr: "", text: "" });

  const dispatch = useDispatch();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (postId) {
      GetPostForInitial(postId, setPostData);
    }
    // eslint-disable-next-line
  }, []);

  const formik = useFormik({
    initialValues: {
      title: postData.title,
      description: postData.descr,
      fullText: postData.text,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Field is required")
        .min(5, "Title is too short - should be 5 chars minimum")
        .max(36, "Title is too long - should be 36 chars maximum"),
      description: Yup.string()
        .required("Field is required")
        .min(5, "Description is too short - should be 5 chars minimum")
        .max(36, "Description is too long - should be 36 chars maximum"),
      fullText: Yup.string()
        .required("Field is required")
        .min(20, "Text is too short - should be 20 chars minimum")
        .max(54, "Text is too long - should be 54 chars maximum"),
    }),
    onSubmit: (values) => {
      if (!onButtonClick) {
        setOnButtoClick(true);

        if (!postId) {
          CreatePostAPI(
            values.title,
            values.description,
            values.fullText,
            setMessage,
            setOnButtoClick
          );
        } else {
          UpdatePostAPI(
            postId,
            values.title,
            values.description,
            values.fullText,
            setMessage,
            dispatch,
            updatePost,
            setOnButtoClick
          );
        }
      }
    },
  });

  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Title>{(postId && "Update post:") || "Create post:"}</Title>

        <ErrorMessage>{message}</ErrorMessage>

        {formik.touched.title && formik.errors.title ? (
          <ErrorMessage>{formik.errors.title}</ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="title"
          placeholder="Enter title..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />

        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="description"
          placeholder="Enter description..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />

        {formik.touched.fullText && formik.errors.fullText ? (
          <ErrorMessage>{formik.errors.fullText}</ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="fullText"
          placeholder="Enter text..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullText}
        />

        <Button type="submit">{(postId && "Update") || "Create"}</Button>
      </Form>
    </React.Fragment>
  );
}

export default PostForm;
