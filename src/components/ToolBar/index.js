import { Button, message } from "antd";
import { connect } from "umi";
import storage from "../../utils/storage";
import styles from "./index.less";

const Toolbar = (props) => {
  const { dispatch, onPreview, realtimeList } = props;
  const handleAceEditorChange = () => {};
  const undo = () => {};
  const redo = () => {};
  const save = () => {
    storage.set({ name: "drag_data", value: realtimeList });
    message.success("保存成功！");
  };
  const clearCanvas = () => {
    dispatch({
      type: 'drag/setRealtimeList',
      payload: []
    })([]);
  };
  const lock = () => {};
  const unlock = () => {};
  const handleScaleChange = () => {};
  return (
    <div className={`flex_start_center ${styles["toolbar"]}`}>
      {/* <Button onClick={handleAceEditorChange}>JSON</Button> */}
      {/* <Button style={{ marginLeft: '10px' }} onClick={undo}>
        撤消
      </Button>
      <Button style={{ marginLeft: '10px' }} onClick={redo}>
        重做
      </Button> */}

      <Button onClick={onPreview}>预览</Button>
      <Button onClick={save}>保存</Button>
      <Button onClick={clearCanvas}>清空画布</Button>
      {/* <Button
        style={{ marginLeft: "10px" }}
        disabled={!curComponent || curComponent.isLock}
        onClick={lock}
      >
        锁定
      </Button> */}
      {/* <Button
        style={{ marginLeft: "10px" }}
        disabled={!curComponent || !curComponent.isLock}
        onClick={unlock}
      >
        解锁
      </Button> */}
      {/* <Button style={{ marginLeft: "10px" }} onClick="preview(true)">
        截图
      </Button> */}

      {/* <div className={styles["canvas-config"]}>
        <span>画布大小</span>
        <Input value={canvasStyleData.width} />
        <span>*</span>
        <Input value={canvasStyleData.height} />
      </div>
      <div className={styles["canvas-config"]}>
        <span>画布比例</span>
        <Input onInput={handleScaleChange} /> %
      </div> */}
    </div>
  );
};

export default connect((state) => ({ ...state.drag }))(Toolbar);
