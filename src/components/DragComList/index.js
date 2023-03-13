import { DRAG_COM_LIST } from "../../utils/contant";
import styles from "./index.less";

const DragComList = (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("comType", e.target.dataset.type);
  };
  return (
    <div className={styles["drag-com-list"]} onDragStart={handleDragStart}>
      {DRAG_COM_LIST.map((item, index) => (
        <div
          key={index}
          className={styles["list"]}
          draggable
          data-index={index}
          data-type={item.type}
        >
          <i className={`iconfont ${item.icon}`}></i>
        </div>
      ))}
    </div>
  );
};

export default DragComList;
