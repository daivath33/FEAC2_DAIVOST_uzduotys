import React from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { MdLockOutline, MdOutlineAccountCircle } from "react-icons/md";

import Input from "../components/common/Input";
import styles from "./Auth.module.scss";
import { useAuth } from "../store/authContext";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordVerify, setPasswordVerify] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        username,
        password,
        passwordVerify,
      };
      await register( registerData);
      setErrorMessage("");
      setUsername("");
      setPassword("");
      setPasswordVerify("");
      navigate("/login");
    } catch (error) {
      console.log(error)
       setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <div className={styles.auth_page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.error_message}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <form onSubmit={handleSubmit} className={styles.auth_form}>
          <Input
            label="Username"
            placeholder="Type your username"
            required
            type="text"
            icon={<MdOutlineAccountCircle size={20} color="#a6aab4" />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Type your password"
            required
            type="password"
            icon={<MdLockOutline size={20} color="#a6aab4" />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Veryify Password"
            placeholder="Veryify your password"
            required
            type="password"
            icon={<MdLockOutline size={20} color="#a6aab4" />}
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>
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
