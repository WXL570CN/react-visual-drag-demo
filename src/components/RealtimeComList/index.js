import { useModel } from "umi";
import styles from "./index.less";

const RealtimeComList = (props) => {
  const { realtimeList, moveUpComponent, moveDownComponent, deleteComponent } =
    useModel("home");
  return (
    <div className={styles["real-time-component-list"]}>
      {realtimeList.map((item, index) => {
        return (
          <div key={index} className={`flex_start_center ${styles["list"]}`}>
            <i className={`iconfont ${item.icon}`}></i>
            <span className={styles["name"]}>{item.label}</span>
            <div className={styles["icon-container"]}>
              <i
                className="iconfont icon-drag-up"
                onClick={() => {
                  moveUpComponent(index);
                }}
              ></i>
              <i
                className="iconfont icon-drag-down"
                onClick={() => {
                  moveDownComponent(index);
                }}
              ></i>
              <i
                className="iconfont icon-drag-delete"
                onClick={() => {
                  deleteComponent(item.id);
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RealtimeComList;
