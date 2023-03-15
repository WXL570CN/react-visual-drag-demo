import { useRef, useState } from "react";
import { useModel } from "umi";
import DragComList from "../components/DragComList";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import RealtimeComList from "../components/RealtimeComList";
import Toolbar from "../components/ToolBar";
import { DRAG_COM_LIST } from "../utils/contant";
import generateID, { deepCopy } from "../utils/utils";
import styles from "./index.less";

export default function HomePage() {
  const {
    addRealtimeList,
    isClickComponent,
    setCurComonent,
    setIsClickComponent,
  } = useModel("home");
  const [isPreview, setIsPreview] = useState(false); // 预览
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
        deepCopy(DRAG_COM_LIST.find((item) => item.type === comType)) || {};
      component.id = generateID();
      component.style.top = e.clientY - rectInfo.y;
      component.style.left = e.clientX - rectInfo.x;
      addRealtimeList(component);
    }
  };
  // 处理鼠标按下
  const handleMouseDown = (e) => {
    e.stopPropagation();
    setIsClickComponent(false);
  };
  // 处理鼠标抬起
  const handleMouseUp = () => {
    if (!isClickComponent) {
      setCurComonent(null);
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
}
