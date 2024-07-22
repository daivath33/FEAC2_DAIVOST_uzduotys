import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string | undefined;
}

const Input: React.FC<InputProps> = ({ label, icon, error, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      {icon ? (
        <div className={styles.input_box}>
          {icon && <p className={styles.icon}>{icon}</p>}
          <input {...props} />
        </div>
      ) : (
        <input {...props} />
      )}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
