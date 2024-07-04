import styles from "./SearchInput.module.scss";

function SearchInput({ ...props }) {
  return (
    <input className={styles.searchInput} placeholder="Search" {...props} />
  )
}

export default SearchInput;