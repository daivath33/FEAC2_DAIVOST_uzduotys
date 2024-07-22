import React from "react";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.scss";
import { Category } from "./CategoryCard";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cards_grid}>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
