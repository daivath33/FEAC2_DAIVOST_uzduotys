import React from "react";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <input
      className={styles.searchInput}
      value={value}
      onChange={onChange}
      placeholder="Search"
      {...props}
    />
  );
};

export default SearchInput;
