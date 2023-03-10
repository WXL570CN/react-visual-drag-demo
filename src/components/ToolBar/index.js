import Button from "../Common/Button";
import Input from "../Common/Input";
import styles from "./index.less";

const Toolbar = (props) => {
  const { canvasStyleData = {}, curComponent = {} } = props;
  const handleAceEditorChange = () => {};
  const undo = () => {};
  const redo = () => {};
  const preview = () => {};
  const save = () => {};
  const clearCanvas = () => {};
  const lock = () => {};
  const unlock = () => {};
  const handleScaleChange = () => {};
  return (
    <div className={`flex_start_center ${styles["toolbar"]}`}>
      {/* <Button onClick={handleAceEditorChange}>JSON</Button> */}
      <Button style={{ marginLeft: "10px" }} onClick={undo}>
        撤消
      </Button>
      <Button style={{ marginLeft: "10px" }} onClick={redo}>
        重做
      </Button>

      <Button style={{ marginLeft: "10px" }} onClick={preview(false)}>
        预览
      </Button>
      <Button style={{ marginLeft: "10px" }} onClick={save}>
        保存
      </Button>
      <Button style={{ marginLeft: "10px" }} onClick={clearCanvas}>
        清空画布
      </Button>
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

      <div className={styles["canvas-config"]}>
        <span>画布大小</span>
        <Input value={canvasStyleData.width} className={styles['num-input']} />
        <span>*</span>
        <Input value={canvasStyleData.height} className={styles['num-input']} />
      </div>
      <div className={styles["canvas-config"]}>
        <span>画布比例</span>
        <Input onInput={handleScaleChange} className={styles['num-input']} /> %
      </div>
    </div>
  );
};

export default Toolbar;
