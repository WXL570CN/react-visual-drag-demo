import styles from './index.less';

const Button = (props) => {
  const { propValue } = props;
  return <button className={styles["button"]}>{propValue}</button>;
};

export default Button;
