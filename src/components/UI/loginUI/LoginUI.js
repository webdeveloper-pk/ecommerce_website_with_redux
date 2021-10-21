import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./LoginUI.module.css";

const LoginUI = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h2>SIGN IN</h2>
        {error !== "" ? <div className={styles.error}>{error}</div> : ""}
        <form onSubmit={submitHandler}>
          <div className={styles.inner_form_wrapper}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={details.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="*******"
              name="password"
              id="password"
              value={details.password}
              onChange={handleChange}
            />
            <button className={styles.login_button} type="submit">
              LOG IN
            </button>
          </div>
        </form>
        <div className={styles.bottom_wrapper}>
          Dont have an Account ? <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
