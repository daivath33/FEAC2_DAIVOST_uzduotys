import React from "react";
import styles from "./PopularBusinesse.module.scss";

export interface BusinessesListProps {
  children: React.ReactNode;
  title?: string;
}
const PopularBusinesses: React.FC<BusinessesListProps> = ({
 children,
  title,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}> {title} </h2>
      <div className={styles.businesses_container}>
       {children}
      </div>
    </div>
  );
};

export default PopularBusinesses;
