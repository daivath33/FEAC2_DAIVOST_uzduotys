import React from "react";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessesList.module.scss";
import { Business } from "../../entities/business";
import useLikedBusinessesStore from "../../store/likedStore";

export interface Props {
  businesses: Business[];
  title?: string;
  mode: string;
}

const BusinessesList: React.FC<Props> = ({ businesses, title, mode }) => {
  const {initializeLikes, toggleLike, liked}=useLikedBusinessesStore();
  
  React.useEffect(() => {
    initializeLikes();
  }, [initializeLikes]);

  return (
    <div className={styles.container}>
      <div>
    <h2 className={styles.heading}>{title}</h2>
    <div className={mode === "home" ? styles.services_grid : styles.search_services_grid}>
      {businesses?.map((business) => (
        <BusinessCard
          key={business.id}
          business={business}
          isLiked={liked.includes(business.id)}
          onToggleLike={()=>toggleLike(business.id)}
        />
      ))}
    </div></div>
  </div>
  );
};

export default BusinessesList;
