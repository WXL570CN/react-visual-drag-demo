import DragComList from "../components/DragComList";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import RealtimeComList from "../components/RealtimeComList";
import Toolbar from "../components/ToolBar";
import styles from "./index.less";
import { connect } from "umi";
import { useRef, useState } from "react";
import { DRAG_COM_LIST } from "../utils/contant";
import generateID from "../utils/utils";
import { cloneDeep } from "lodash";

const HomePage = (props) => {
  const { dispatch, isClickComponent } = props; // 获取所有model的状态

  const [isPreview, setIsPreview] = useState(false);
  const editorRef = useRef(null);

  // 处理鼠标拖拽移入
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  // 处理鼠标拖拽松开
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const comType = JSON.parse(e.dataTransfer.getData("comType"));
    const rectInfo = editorRef.current.editorClient;
    if (comType) {
      const component =
        cloneDeep(DRAG_COM_LIST.find((item) => item.type === comType)) || {};
      component.id = generateID();
      component.style.top = e.clientY - rectInfo.y;
      component.style.left = e.clientX - rectInfo.x;
      dispatch({
        type: "drag/addRealtimeList",
        payload: component,
      });
    }
  };
  // 处理鼠标按下
  const handleMouseDown = (e) => {
    e.stopPropagation();
    dispatch({
      type: "drag/setIsClickComponent",
      payload: false,
    });
  };
  // 处理鼠标抬起
  const handleMouseUp = () => {
    if (!isClickComponent) {
      dispatch({
        type: "drag/setCurComponent",
      });
    }
  };
  return (
    <div className={styles["home"]}>
      <Toolbar
        onPreview={() => {
          setIsPreview(true);
        }}
      />
      <main className="flex_start_center">
        {/* 左侧组件列表 */}
        <section className={styles["left"]}>
          <DragComList />
          <RealtimeComList />
        </section>
        {/* 中间画布 */}
        <section className={styles["center"]}>
          <div
            className={styles["content"]}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <Editor ref={editorRef} />
          </div>
        </section>
        {/* 右侧属性列表 */}
        <section className={styles["right"]}></section>
      </main>
      {isPreview && (
        <Preview
          visible={isPreview}
          onCancel={() => {
            setIsPreview(false);
          }}
        />
      )}
    </div>
  );
};

export default connect((state) => state.drag)(HomePage);
