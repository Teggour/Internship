import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthAPI from "../../api/AuthAPI";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessageForm/ErrorMessageForm";

function AuthForm() {
  const [message, setMessage] = useState("");
  const [onButtonClick, setOnButtonClick] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    return setOnButtonClick;
  }, [setOnButtonClick]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Field is required"),
      password: Yup.string()
        .required("Field is required")
        .min(4, "Password is too short - should be 4 chars minimum")
        .max(8, "Password is too long - should be 8 chars maximum")
        .matches(
          /[a-zA-Z0-9]/,
          "Password can only contain Latin letters and numbers"
        ),
    }),
    onSubmit: (values) => {
      if (!onButtonClick) {
        setOnButtonClick(true);

        AuthAPI(
          values.email,
          values.password,
          setMessage,
          dispatch,
          setOnButtonClick
        );
      }
    },
  });

  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Authorization:</Title>

        <ErrorMessage>{message}</ErrorMessage>

        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
        <Input
          type="text"
          name="email"
          placeholder="Enter email..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Input
          type="password"
          name="password"
          placeholder="Enter password..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        <Button type="submit">Log In</Button>
      </Form>
    </React.Fragment>
  );
}

export default AuthForm;
