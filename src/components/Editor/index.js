import React, { useImperativeHandle, useRef } from "react";
import { useModel, useDispatch, useSelector } from "umi";
import Grid from "../Grid";
import Shape from "../Shape";
import styles from "./index.less";

const Editor = React.forwardRef((props, ref) => {
  // const { curComponent, realtimeList } = useModel("home");
  const dispatch = useDispatch(); // 获取dispatch
  const { curComponent, realtimeList } = useSelector((s) => s.drag); // 获取所有model的状态
  const editorRef = useRef(null);

  const getEditorClient = () => editorRef.current?.getBoundingClientRect()

  useImperativeHandle(ref, () => ({
    editorClient: getEditorClient(),
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
      style={CANVAS_STYLE}
      onMouseDown={handleMouseDown}
    >
      {/* 网格线 */}
      <Grid />
      {/* 页面组件列表展示 */}
      {realtimeList.map((item, index) => {
        let Com = COM_LIST[item.type]
        return (
          <Shape key={item.id} style={item.style} element={item} editorClient={getEditorClient()}>
            <Com {...item} />
          </Shape>
        );
      })}
    </div>
  );
});

export default Editor;
