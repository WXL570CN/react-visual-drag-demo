import styles from "./index.less";

const Area = (props) => {
  const { start, width, height } = props;
  return (
    <div
      style={{
        left: `${start.x}px`,
        top: `${start.y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={styles["area"]}
    ></div>
  );
};

export default Area;
