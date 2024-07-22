import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  rounded?: boolean;  
}

const Button: React.FC<ButtonProps> = ({ className, rounded,   ...props }) => {
  return (
    <button
      className={classNames(
        styles.button,
        rounded && styles.rounded,
        className
      )}
      {...props}
    />
  );
};

export default Button;
