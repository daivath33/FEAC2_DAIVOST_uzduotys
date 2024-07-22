import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";
import styles from "./AppLayout.module.scss"

const AppLayout: React.FC = () => {
  return (
    <div className={styles.page}>
     
      <Topbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
