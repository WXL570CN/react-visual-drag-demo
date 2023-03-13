import styles from "./index.less";
import { useModel } from "umi";
import calculateComponentPositonAndSize, {
  calculateCenter,
  getDirectionPointStyle,
} from "../../utils/calculateComponentPositonAndSize";
import { CANVAS_STYLE, DIRECTION_POINTS } from "../../utils/contant";

const Shape = (props) => {
  const { style, element, children, editorClient } = props;
  const {
    curComponent,
    setCurComonent,
    setIsClickComponent,
    updateCurComponent,
  } = useModel("home");

  // 鼠标移动
  const handleMouseDownOnShape = (e) => {
    setIsClickComponent(true);
    e.stopPropagation();
    // 存储当前编辑的图纸
    setCurComonent(element);

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
      updateCurComponent(_style);
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

      calculateComponentPositonAndSize(
        point,
        _style,
        curPositon,
        CANVAS_STYLE
      );
      updateCurComponent(_style)
    };

    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  };

  const active = curComponent?.id === element.id;
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

export default Shape;
