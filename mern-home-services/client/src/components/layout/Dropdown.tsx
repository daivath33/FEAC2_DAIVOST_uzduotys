import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dropdown.module.scss";
import useAuthStore from "../../store/authStore";
import { userLinks } from "../../data/links";

const Dropdown: React.FC = () => {
  const { logout, user } = useAuthStore();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.avatar}>{user?.name.substring(0, 1)}</div>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownLinks}>
          {userLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={styles.dropdownLink}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#6d28d9" : "",
                };
              }}
            >
              <p>{link.label}</p>
            </NavLink>
          ))}
          <div className={styles.dropdownLink} onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
