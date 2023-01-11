import classes from "./Button.module.css";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
