import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
      <div className={styles.error_page}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <h6>The page you are looking for doesn't exist</h6>
        <p>
          Go to <Link to="/home" className={styles.link}> Home </Link> page.
        </p>
      </div>
  );
}

export default ErrorPage;
