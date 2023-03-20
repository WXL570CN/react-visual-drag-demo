import { connect } from "umi";
import calculateComponentPositonAndSize, {
  calculateCenter,
  getDirectionPointStyle,
} from "../../utils/calculateComponentPositonAndSize";
import { CANVAS_STYLE, DIRECTION_POINTS } from "../../utils/contant";
import styles from "./index.less";

const Shape = (props) => {
  const {
    dispatch,
    style,
    element,
    children,
    editorClient,
    isPreview,
    curComponent,
  } = props;
  // 鼠标移动
  const handleMouseDownOnShape = (e) => {
    dispatch({
      type: "drag/setIsClickComponent",
      payload: true,
    });
    e.stopPropagation();
    // 存储当前编辑的图纸
    dispatch({
      type: "drag/setCurComponent",
      payload: element,
    });

    const _style = { ...style };
    // 鼠标按下时的位置
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    // 鼠标按下时组件的位置
    const startStyle = {
      top: Number(_style.top),
      left: Number(_style.left),
    };
    const move = (moveEvent) => {
      // 计算偏移量
      const offset = {
        x: moveEvent.clientX - startPos.x,
        y: moveEvent.clientY - startPos.y,
      };
      calculateCenter(_style, startStyle, offset, CANVAS_STYLE);
      // 修改当前组件样式
      // updateCurComponent(_style, element);
      dispatch({
        type: "drag/updateCurComponent",
        payload: _style,
      });
    };

    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  // 拖动缩放图纸的点
  const handleMouseDownOnPoint = (point, e) => {
    if (isPreview) return;
    e.stopPropagation();
    e.preventDefault();

    const _style = { ...style };

    // 获取画布位移信息
    const move = (moveEvent) => {
      // 实时鼠标位置
      const curPositon = {
        x: moveEvent.clientX - Math.round(editorClient.left),
        y: moveEvent.clientY - Math.round(editorClient.top),
      };

      calculateComponentPositonAndSize(point, _style, curPositon, CANVAS_STYLE);
      dispatch({
        type: "drag/updateCurComponent",
        payload: _style,
        element,
      });
    };

    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };

  const active = !isPreview && curComponent?.id === element.id;
  return (
    <div
      className={`${styles["shape"]} ${active ? styles["active"] : ""}`}
      onMouseDown={handleMouseDownOnShape}
      style={style}
    >
      {active &&
        DIRECTION_POINTS.map((item) => (
          <div
            key={item}
            className={`${styles["shape-point"]} `}
            style={getDirectionPointStyle(item, style)}
            onMouseDown={(e) => {
              handleMouseDownOnPoint(item, e);
            }}
          />
        ))}
      {children}
    </div>
  );
};

export default connect((state) => state.drag)(Shape);
