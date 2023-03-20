import { connect } from "umi";
import styles from "./index.less";

const RealtimeComList = (props) => {
  const { dispatch, realtimeList, curComponent } = props;

  return (
    <div className={styles["real-time-component-list"]}>
      {realtimeList.map((item, index) => {
        const active = curComponent?.id === item.id;
        return (
          <div
            key={index}
            className={`flex_start_center ${styles["list"]} ${
              active && styles["active"]
            }`}
            onClick={() => {
              dispatch({
                type: "drag/setCurComponent",
                payload: item,
              });
            }}
          >
            <i className={`iconfont ${item.icon}`}></i>
            <span className={styles["name"]}>{item.label}</span>
            <div className={styles["icon-container"]}>
              <i
                className="iconfont icon-drag-up"
                onClick={() => {
                  dispatch({
                    type: "drag/moveUpComponent",
                    payload: index,
                  });
                }}
              ></i>
              <i
                className="iconfont icon-drag-down"
                onClick={() => {
                  dispatch({
                    type: "drag/moveDownComponent",
                    payload: index,
                  });
                }}
              ></i>
              <i
                className="iconfont icon-drag-delete"
                onClick={() => {
                  dispatch({
                    type: "drag/deleteComponent",
                    payload: item.id,
                  });
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect((s) => ({
  ...s.drag,
}))(RealtimeComList);
