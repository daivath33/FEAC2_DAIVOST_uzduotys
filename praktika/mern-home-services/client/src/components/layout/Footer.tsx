import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Home Services {new Date().getFullYear()} &copy; All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
