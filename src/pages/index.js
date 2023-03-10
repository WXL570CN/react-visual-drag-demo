import DragComList from "../components/DragComList";
import Editor from "../components/Editor";
import RealtimeComList from "../components/RealtimeComList";
import Toolbar from "../components/ToolBar";
import styles from "./index.less";

export default function HomePage() {
  return (
    <div className={styles["home"]}>
      <Toolbar />
      <main>
        {/* 左侧组件列表 */}
        <section className={styles["left"]}>
          <DragComList />
          <RealtimeComList />
        </section>
        {/* 中间画布 */}
        <section className={styles["center"]}>
          <div className={styles["content"]}>
            <Editor />
          </div>
        </section>
        {/* 右侧属性列表 */}
      </main>
    </div>
  );
}
