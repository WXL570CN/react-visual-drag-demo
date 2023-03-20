import { Button, message } from "antd";
import { connect } from "umi";
import changeComponentsSizeWithScale from "../../utils/changeComponentsSizeWithScale";
import { DRAG_COM_LIST, DRAG_COM_TYPE } from "../../utils/contant";
import storage from "../../utils/storage";
import { getImgWideHighAfterAdaptive, getOptionsMatch } from "../../utils/utils";
import ImgUpload from "../ImgUpload";
import styles from "./index.less";

const Toolbar = (props) => {
  const { dispatch, onPreview, realtimeList, canvasStyle } = props;
  const handleAceEditorChange = () => {};
  const undo = () => {};
  const redo = () => {};
  const save = () => {
    storage.set({ name: "drag_data", value: realtimeList });
    message.success("保存成功！");
  };
  const clearCanvas = () => {
    dispatch({
      type: "drag/setRealtimeList",
      payload: [],
    })([]);
  };
  const lock = () => {};
  const unlock = () => {};
  const handleScaleChange = () => {};
  const handleFileChange = (file) => {
    const { width, height, url } = file || {};
    const imgComConst = getOptionsMatch(DRAG_COM_LIST, DRAG_COM_TYPE.IMG, {
      valueName: "type",
    });
    const component = {
      ...imgComConst,
      propValue: url,
      style: { top: 0, left: 0, ...getImgWideHighAfterAdaptive(width, height) },
    };
    // 根据画面比例修改组件样式比例 https://github.com/woai3c/visual-drag-demo/issues/91
    changeComponentsSizeWithScale(component, {
      realtimeList,
      canvasStyle,
    });
    dispatch({
      type: 'drag/setCurComponent',
      payload: component,
    })
    dispatch({
      type: "drag/addRealtimeList",
      payload: component,
    });
  };
  return (
    <div className={`flex_start_center ${styles["toolbar"]}`}>
      {/* <Button onClick={handleAceEditorChange}>JSON</Button> */}
      {/* <Button style={{ marginLeft: '10px' }} onClick={undo}>
        撤消
      </Button>
      <Button style={{ marginLeft: '10px' }} onClick={redo}>
        重做
      </Button> */}
      <ImgUpload onChange={handleFileChange} />
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

export default connect((state) => state.drag)(Toolbar);
