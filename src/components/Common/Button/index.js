import styles from "./index.less";

const Button = (props) => {
  return (
    <button {...props} className={`${styles["my-button"]} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
