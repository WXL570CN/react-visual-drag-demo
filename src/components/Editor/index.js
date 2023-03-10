import React, { useImperativeHandle, useRef } from "react";
import Grid from "../Grid";
import styles from "./index.less";
import { useModel } from "umi";

const Editor = React.forwardRef((props, ref) => {
  const { curComponent, realtimeList } = useModel("home");
  const editorRef = useRef(null);
  useImperativeHandle(ref, () => ({
    editorClient: () => editorRef.current.getBoundingClientRect(),
  }));

  const handleMouseDown = (e) => {
    // 如果没有选中组件 在画布上点击时需要调用 e.preventDefault() 防止触发 drop 事件
    if (!curComponent) {
      e.preventDefault();
    }
  };
  return (
    <div
      ref={editorRef}
      className={styles["editor"]}
      style={{ width: "100%", height: "99%" }}
      onMouseDown={handleMouseDown}
    >
      {/* 网格线 */}
      <Grid />
      {/* 页面组件列表展示 */}
      {realtimeList.map((item, index) => {
        return <div key={item.id}></div>;
      })}
    </div>
  );
});

export default Editor;
