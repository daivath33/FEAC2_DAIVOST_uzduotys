import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/businesses/Sidebar";
import Spinner from "../components/common/Spinner";
import BusinessesList from "../components/businesses/BusinessesList";
import styles from "./Businesses.module.scss";
import { useBusunessesByCategory } from "../hooks/useBusinessesByCategory";

const SearchCategory: React.FC = () => {
  const { category } = useParams();
  const { businesses, isLoading, error } = useBusunessesByCategory(category);

  let content;

  if (isLoading) {
    content = (
      <div className={styles.loader}>
        <Spinner />
      </div>
    );
  }
  if (!isLoading && !businesses) {
    content = (
      <div className={styles.container}>
        <h4 className={styles.heading}>No Services in this category!</h4>
      </div>
    );
  }
  if (!isLoading && businesses) {
    content = (
      <BusinessesList title={`${category} Services`} businesses={businesses} mode="search"/>
    );
  }

  return (
 
      <div className={styles.container}>
        <Sidebar />
        {content}
      </div>
   
  );
};

export default SearchCategory;
