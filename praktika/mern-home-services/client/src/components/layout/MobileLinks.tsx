import React from "react";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { visitorLinks, userLinks } from "../../data/links";
import styles from "./Topbar.module.scss";
import useAuthStore from "../../store/authStore";

const MobileLinks: React.FC = () => {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuthStore();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav className={styles.small}>
      {visitorLinks.map((link) => (
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
      <div>
        {isLoggedIn ? (
          <>
            {userLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={classNames(styles.link, styles.user_link)}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#6d28d9" : "",
                  };
                }}
              >
                <p>{link.label}</p>
              </NavLink>
            ))}

            <div
              onClick={handleLogout}
              className={classNames(styles.link, styles.user_link)}
            >
              Logout
            </div>
          </>
        ) : (
          <div
            onClick={() => navigate("/login")}
            className={classNames(styles.link)}
          >
            Login / Sign Up
          </div>
        )}
      </div>
    </nav>
  );
};

export default MobileLinks;
