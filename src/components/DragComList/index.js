import { DRG_COM_LIST } from "../../utils/contant";
import styles from "./index.less";

const DragComList = (props) => {
  const handleDragStart = () => {};
  return (
    <div className={styles["drag-com-list"]}>
      {DRG_COM_LIST.map((item, index) => (
        <div
          key={index}
          className={styles["list"]}
          draggable
          data-index={index}
        >
          <i className={`iconfont ${item.icon}`}></i>
        </div>
      ))}
    </div>
  );
};

export default DragComList;
