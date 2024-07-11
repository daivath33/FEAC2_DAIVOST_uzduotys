import PropTypes from "prop-types";
import ServiceCard from "./ServiceCard";
import styles from "./ServicesList.module.scss";

function ServicesList({ services, title }) {
  return (
    <section>
      <div className={styles.container}>
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

ServicesList.propTypes = {
  services: PropTypes.array,
  title: PropTypes.string,
};

export default ServicesList;
