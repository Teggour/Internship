import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserName } from "../../reduxToolkit/toolkitSlice";
import UpdateUserAPI from "../../api/UpdateUserAPI";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessageForm/ErrorMessageForm";

function UpdateProfileUser(props) {
  const id = props.match.params.userId;
  const userName = useSelector((state) => state.toolkit.currentUserName) || "";

  const [message, setMessage] = useState("");
  const [onButtonClick, setOnButtonClick] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: userName,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Field is required")
        .min(4, "Name is too short - should be 4 chars minimum")
        .max(8, "Name is too long - should be 8 chars maximum"),
    }),
    onSubmit: (values) => {
      if (!onButtonClick) {
        setOnButtonClick(true);
        UpdateUserAPI(
          id,
          values.name,
          setMessage,
          dispatch,
          setCurrentUserName,
          setOnButtonClick
        );
      }
    },
  });

  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Update name:</Title>

        <ErrorMessage>{message}</ErrorMessage>

        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="name"
          placeholder="Enter name..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        <Button type="submit">Update</Button>
      </Form>
    </React.Fragment>
  );
}

export default UpdateProfileUser;
