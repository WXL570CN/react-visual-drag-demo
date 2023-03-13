import styles from "./index.less";

const Text = (props) => {
  const { style, name } = props;
  return (
    <div className={styles["text-box"]} style={style} title={name}>
      <div className={styles["name"]}>{name || '双击输入文字'}</div>
    </div>
  );
};

export default Text;
