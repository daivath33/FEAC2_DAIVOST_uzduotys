import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Button from "../common/Button";
import SearchInput from "../common/SearchInput";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Find Home <span className={styles.primary}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.search_container}>
        <SearchInput
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button rounded >
          <div className={styles.icon}>
            <IoSearchOutline fontSize={30} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
