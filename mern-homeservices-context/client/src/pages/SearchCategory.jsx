import { useParams } from "react-router-dom";

import ServicesList from "../components/services/ServicesList";
import Sidebar from "../components/services/Sidebar";
import { services } from "../data/data";
import styles from "./SearchCategory.module.scss";

function SearchCategory() {
  const { category } = useParams();

  let searchedServices;
  let title;

  if (category === "all") {
    searchedServices = services;
    title = "All Home Services";
  } else {
    title = category;
    searchedServices = services.filter(
      (service) => service.category === category
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <ServicesList services={searchedServices} title={title} />
      </div>
    </div>
  );
}

export default SearchCategory;
