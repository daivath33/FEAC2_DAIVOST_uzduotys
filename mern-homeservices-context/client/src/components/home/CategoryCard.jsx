import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

function CategoryCard({ category }) {
  const { name, icon } = category;
  const Icon = icon;

  return (
    <Link to={`/search/${name}`} className={styles.card}>
      <Icon fontSize={48} color={category.color} />
      <p className={styles.name}>{name}</p>
    </Link>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
