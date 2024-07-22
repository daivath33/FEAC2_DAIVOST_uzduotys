import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Topbar.module.scss";
import { visitorLinks } from '../../data/links';

const VisitorLinks: React.FC = () => {
  return (
    <nav className={styles.navigation}>
    {visitorLinks.map((link) => (
      <NavLink
        key={link.label}
        to={link.href}
        className={styles.link}
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
  )
}

export default VisitorLinks;