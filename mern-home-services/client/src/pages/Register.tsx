import React from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  MdLockOutline,
  MdOutlineAccountCircle,
  MdMailOutline,
} from "react-icons/md";
import styles from "./Auth.module.scss";
import useAuthStore from "../store/authStore";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const { register } = useAuthStore();

  const handleSubmit = async (values: RegisterFormValues) => {
    console.log("Form data", values);

    try {
      await register(values);
      navigate("/login");
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.errorMessage);
    }
  };
  console.log("Register Page");
  return (
    <div className={styles.auth_page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.error_message}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name*</label>
                <MdOutlineAccountCircle size={24} color="#808288" className={styles.icon}/>
                <Field id="name" name="name" type="text" className={styles.input}  placeholder="username"/>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email*</label>
                <MdMailOutline size={24} color="#808288" className={styles.icon} />
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password*</label>
                <MdLockOutline size={24} color="#808288" className={styles.icon}/>
                <Field id="password" name="password" type="password" className={styles.input} placeholder="******"/>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>Confirm Password*</label>
                <MdLockOutline size={24} color="#808288" className={styles.icon}/>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={styles.input}
                  placeholder="******"/>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button
                className={styles.btn}
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <div>
          <div></div>
        </div>
        <div>
          <p className={styles.text}>Altready Have an Account?</p>
          <Link to="/login">
            <p className={classNames(styles.text, styles.text_link)}>LOGIN</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
