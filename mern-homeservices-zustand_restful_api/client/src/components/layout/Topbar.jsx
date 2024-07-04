import React from "react";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { LuMenuSquare, LuXCircle } from "react-icons/lu";

import Button from "../common/Button";
import styles from "./Topbar.module.scss";
import { links } from "../../data/links";
import useAuthStore from "../../store/zustanStore";

function Topbar() {
  const navigate = useNavigate();
  const [navList, setNavList] = React.useState(false);
  const { logout,  isLoggedIn } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error)
    }   
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.leftSide}>
        <img src="/logo.svg" alt="logo" />

        {!navList ? (
          <nav className={styles.navigation}>
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={classNames(styles.link)}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#6d28d9" : "",
                  };
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        ) : (
          <nav className={styles.small}>
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={classNames(styles.link)}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#6d28d9" : "",
                  };
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <div className={styles.small_btn}>
            {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>Login / Sign Up</Button>
        )}
            </div>
            
          </nav>
        )}
      </div>

      <div className={styles.rightSide}>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>Login / Sign Up</Button>
        )}
      </div>
      <div onClick={() => setNavList(!navList)} className={styles.toggle}>
        {!navList ? (
          <LuMenuSquare size={42} color="#1f2937" />
        ) : (
          <LuXCircle size={42} color="#1f2937" />
        )}
      </div>
    </div>
  );
}

export default Topbar;
