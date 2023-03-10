import DragComList from "../components/DragComList";
import Editor from "../components/Editor";
import RealtimeComList from "../components/RealtimeComList";
import Toolbar from "../components/ToolBar";
import styles from "./index.less";
import { useModel } from "umi";
import { useRef } from "react";

export default function HomePage() {
  const { addRealtimeList } = useModel("home");
  const editorRef = useRef(null);
  // 处理鼠标按下
  const handleMouseDown = () => {};
  // 处理鼠标抬起
  const handleMouseUp = () => {};
  // 处理鼠标拖拽移入
  const handleDragOver = () => {};
  // 处理鼠标拖拽松开
  const handleDrop = (e) => {};
  return (
    <div className={styles["home"]}>
      <Toolbar />
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
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            <Editor ref={editorRef} />
          </div>
        </section>
        {/* 右侧属性列表 */}
        <section className={styles["right"]}></section>
      </main>
    </div>
  );
}
