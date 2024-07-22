import React from "react";
import { useNavigate } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import Button from "../common/Button";
import styles from "./BusinessCard.module.scss";
import { Business } from "../../entities/business";

interface BusinessCardProps {
  business: Business;
  isLiked: boolean;
  onToggleLike: (id: string) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business,  isLiked , onToggleLike}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <LuHeart
       onClick={() => onToggleLike(business.id)}
        size={34}
        className={styles.liked}
        fill={isLiked === false ? "transparent" : "#a855f7"}
      />
      <img src={business.photos[0]} className={styles.image} />
      <div className={styles.info}>
        <span className={styles.category}> {business.category}</span>
        <h3 className={styles.title}> {business.name}</h3>
        <h3 className={styles.master}>{business.contactPerson}</h3>
        <h3 className={styles.address}>{business.address}</h3>
        <Button
          className={styles.btn}
          onClick={() => navigate(`/businesses/${business.id}`)}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default BusinessCard;
