import styles from "./index.less";

const Input = (props) => {
  return (
    <input {...props} className={`${styles["my-input"]} ${props.className}`} />
  );
};

export default Input;
