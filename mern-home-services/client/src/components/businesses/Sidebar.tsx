import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { categories } from "../../data/data";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <h4>Categories</h4>
      {categories.map((category) => (
        <NavLink
          to={`/search/${category.name}`}
          key={category.name}
          className={styles.catgory}
          style={({ isActive }) => {
            return {
              color: isActive ? "#5b21b6" : "",
              background: isActive ? "#f5f3ff" : "",
              boxShadow: isActive
                ? "#6d28d9 0px 1px 3px 0px, #8b5cf6 0px 0px 0px 1px"
                : "",
            };
          }}
        >
          <category.icon fontSize={28} color={category.color} />
          <p className={styles.name}>{category.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
