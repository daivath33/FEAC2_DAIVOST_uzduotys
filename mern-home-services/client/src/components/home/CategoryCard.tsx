import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

export interface Category {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, icon } = category;
  const Icon = icon;

  return (
    <Link to={`/search/${name}`} className={styles.card}>
      <Icon fontSize={48} color={category.color} />
      <p className={styles.name}>{name}</p>
    </Link>
  );
};

export default CategoryCard;
