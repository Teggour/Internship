import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import RegistrationAPI from "../../api/RegistrationAPI";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../components/InputForForm/InputForForm";
import Button from "../../components/ButtonForForm/ButtonForForm";
import Title from "../../components/TitleForForm/TitleForForm";
import Form from "../../components/Form/Form";
import ErrorMessage from "../../components/ErrorMessageForm/ErrorMessageForm";

function RegistrationForm() {
  const [message, setMessage] = useState("");
  const [onButtonClick, setOnButtonClick] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    return setOnButtonClick;
  }, [setOnButtonClick]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Field is required")
        .min(4, "Name is too short - should be 4 chars minimum")
        .max(8, "Name is too long - should be 8 chars maximum"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Field is required"),
      password: Yup.string()
        .required("Field is required")
        .min(5, "Password is too short - should be 5 chars minimum")
        .max(8, "Password is too long - should be 8 chars maximum")
        .matches(
          /[a-zA-Z0-9]/,
          "Password can only contain Latin letters and numbers"
        ),
    }),
    onSubmit: (values) => {
      if (!onButtonClick) {
        setOnButtonClick(true);
        RegistrationAPI(
          dispatch,
          values.email,
          values.password,
          values.name,
          setMessage,
          setOnButtonClick
        );
      }
    },
  });

  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Registration:</Title>

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

        <Button type="submit">Sign Up</Button>
      </Form>
    </React.Fragment>
  );
}

export default RegistrationForm;
