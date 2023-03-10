import React from "react";
import Grid from "../Grid";
import styles from "./index.less";

const Editor = React.forwardRef((props, ref) => {
  return (
    <div className={styles["editor"]} style={{ width: "100%", height: "99%" }}>
      {/* 网格线 */}
      <Grid />
    </div>
  );
});

export default Editor;
