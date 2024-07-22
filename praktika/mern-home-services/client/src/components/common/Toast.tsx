import React from 'react'
import classNames from "classnames";
import styles from "./Toast.module.scss"

interface Props{
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void; 
}

const Toast: React.FC<Props> = ( {message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const className =
    type === "SUCCESS"
      ? styles.success
      : styles.error;
  return (
    <div className={classNames(styles.toast, className)}>
    <div className={styles.container}>
      <span >{message}</span>
    </div>
  </div>
  )
}

export default Toast;