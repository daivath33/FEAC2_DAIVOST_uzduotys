import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";
import { useBusunessesByCategory } from "../../hooks/useBusinessesByCategory";
import styles from "./SimmilarBusinesses.module.scss";

export interface SimmilarBusinessesProps {
  category: string;
  id: string | undefined;
}

const SimmilarBusinesses: React.FC<SimmilarBusinessesProps> = ({
  category,
  id,
}) => {
  const { businesses, isLoading, error } = useBusunessesByCategory(category);

  if (isLoading) {
    return (
      <div className={styles.simmilar_businesses}>
        <Spinner />
      </div>
    );
  }
  // console.log(businesses?.slice(0, 1));
  let simmilarBisinesses = businesses?.filter((business) => business.id !== id);
  simmilarBisinesses = simmilarBisinesses?.slice(0, 4);

  return (
    <div className={styles.simmilar_businesses}>
      <h3>Simillar Businesses</h3>
      <div className={styles.simmilar_businesses_cards}>
        {simmilarBisinesses?.map((business) => (
          <Link
            to={`/businesses/${business.id}`}
            key={business.id}
            className={styles.small_card}
          >
            <img src={business.photos[0]} />
            <div className={styles.details}>
              <p className={styles.name}>{business.name}</p>
              <p className={styles.person}>{business.contactPerson}</p>
              <p className={styles.address}>{business.address}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimmilarBusinesses;
