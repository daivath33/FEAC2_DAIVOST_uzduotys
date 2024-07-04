import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.scss";


function CategoryList({categories}) {
  return (
    <section>
       <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
    </section>
   
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array,
};

export default CategoryList;