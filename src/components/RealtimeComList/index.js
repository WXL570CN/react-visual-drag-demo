import { DRAG_COM_LIST } from "../../utils/contant";
import styles from "./index.less";

const RealtimeComList = (props) => {
  return (
    <div className={styles['real-time-component-list']}>
      {DRAG_COM_LIST.map((item, index) => {
        return (
          <div key={index} className={`flex_start_center ${styles["list"]}`}>
            <i className={`iconfont ${item.icon}`}></i>
            <span className={styles['name']}>1</span>
            <div className={styles['icon-container']}>
              <i className="iconfont icon-drag-up"></i>
              <i className="iconfont icon-drag-down"></i>
              <i className="iconfont icon-drag-delete"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RealtimeComList;
