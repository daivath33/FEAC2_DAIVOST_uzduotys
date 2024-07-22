import React from "react";
import Hero from "../components/home/Hero";
import CategoryList from "../components/home/CategoryList";
import BusinessesList from "../components/businesses/BusinessesList";
import Spinner from "../components/common/Spinner";
import { categories } from "../data/data";
import { useBusinesses } from "../hooks/useBusinesses";

const Home: React.FC = () => {
  const { businesses, isLoading, error } = useBusinesses();

  let businessesContent;
  if (isLoading) {
    businessesContent = (
      <div>
        <Spinner />
      </div>
    );
  }
  if (businesses && businesses.length !== 0) {
    let popularBusinesses = businesses?.slice(0, 8);
    businessesContent = (
     
        <BusinessesList
          title="Popular Businesses"
          businesses={popularBusinesses}
          mode="home"
        />
    
    );
  }
  return (
    <div >
      <Hero />
      <CategoryList categories={categories} />
      {businessesContent}
    </div>
  );
};

export default Home;
