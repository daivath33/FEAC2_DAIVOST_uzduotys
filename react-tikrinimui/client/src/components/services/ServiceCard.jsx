import PropTypes from "prop-types";

import Button from "../common/Button";
import styles from "./ServiceCard.module.scss";

function ServiceCard({ service }) {
  return (
    <>
      <div className={styles.card}>
        <img src={service.image} className={styles.image} />
        <div className={styles.info}>
          <span className={styles.category}> {service.category}</span>
          <h3 className={styles.title}> {service.title}</h3>
          <h3 className={styles.master}>{service.master}</h3>
          <h3 className={styles.address}>{service.address}</h3>
          <Button className={styles.btn}>Book Now</Button>
        </div>
      </div>
    </>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;


