import PropTypes from "prop-types";
import ServiceCard from "../services/ServiceCard";
import styles from "./PopularServices.module.scss";

function PopularServices({ services, title }) {
  return (
    <section>
      <div>
        <h2 className={styles.heading}> {title} </h2>
        <div className={styles.services_container}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

PopularServices.propTypes = {
  services: PropTypes.array,
  title: PropTypes.string,
};

export default PopularServices;
