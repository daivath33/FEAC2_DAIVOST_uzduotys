import React from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { MdLockOutline, MdOutlineAccountCircle } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Input from "../components/common/Input";
import styles from "./Auth.module.scss";
import { isNotEmpty, hasMinLength, isEmail } from "../util/validation";
import { useInput } from "../hooks/useInput";
import useAuthStore from "../store/authStore";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const {
    value: email,
    handleInputChange: handleUserEmailChange,
    handleInputBlur: handleUserEmailBlur,
    hasError: usernameHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6) && isNotEmpty(value));

  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await login(loginData);
      setErrorMessage("");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div className={styles.auth_page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.error_message}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <form onSubmit={handleSubmit} className={styles.auth_form}>
          <Input
            label="Email address*"
            placeholder="Type your email"
            required
            type="text"
            icon={<MdOutlineAccountCircle size={22} color="#808288" />}
            value={email}
            onBlur={handleUserEmailBlur}
            onChange={handleUserEmailChange}
            error={
              usernameHasError
                ? "Please enter your valid email address!"
                : undefined
            }
          />
          <Input
            label="Password*"
            placeholder="Type your password"
            required
            type="password"
            icon={<MdLockOutline size={22} color="#808288" />}
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={
              passwordHasError ? "Please enter a valid password!" : undefined
            }
          />
          <button className={styles.btn} type="submit">
            Login
          </button>
        </form>
        <div>
          <p className={styles.text}>Or Sign Up Using</p>
          <div className={styles.social_icons}>
            <div
              className={classNames(
                styles.social_icon,
                styles.social_icon_facebook
              )}
            >
              <FaFacebookF size={16} />
            </div>
            <div
              className={classNames(
                styles.social_icon,
                styles.social_icon_twitter
              )}
            >
              <FaTwitter size={16} />
            </div>
            <div
              className={classNames(
                styles.social_icon,
                styles.social_icon_google
              )}
            >
              <FaGoogle size={16} />
            </div>
          </div>
        </div>
        <div>
          <p className={styles.text}>Or Sign Up Using</p>
          <Link to="/register">
            <p className={classNames(styles.text, styles.text_link)}>SIGN UP</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
