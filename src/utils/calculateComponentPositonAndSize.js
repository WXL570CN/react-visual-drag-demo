import { CURSORS } from "./contant";

const funcs = {
  lt: calculateLeftTop,
  t: calculateTop,
  rt: calculateRightTop,
  r: calculateRight,
  rb: calculateRightBottom,
  b: calculateBottom,
  lb: calculateLeftBottom,
  l: calculateLeft,
};

// 左上缩放
function calculateLeftTop(style, curPositon) {
  const { width, height, top, left } = style;
  //   鼠标的实时位置不能超出容器
  const curX = Math.max(0, curPositon.x);
  const curY = Math.max(0, curPositon.y);
  const offsetX = left - curX;
  const offsetY = top - curY;
  style.width = width + offsetX;
  style.height = height + offsetY;
  style.top = curY;
  style.left = curX;
}

// 右上缩放
function calculateRightTop(style, curPositon, canvasStyle) {
  const { height, top, left } = style;
  //   鼠标的实时位置不能超出容器
  const curX = Math.max(0, Math.min(canvasStyle.width, curPositon.x));
  const curY = Math.max(0, curPositon.y);
  const offsetX = curX - left;
  const offsetY = top - curY;
  style.width = offsetX;
  style.height = height + offsetY;
  style.top = curY;
}

// 右下缩放
function calculateRightBottom(style, curPositon, canvasStyle) {
  const { top, left } = style;
  //   鼠标的实时位置不能超出容器
  const curX = Math.max(0, Math.min(canvasStyle.width, curPositon.x));
  const curY = Math.max(0, Math.min(canvasStyle.height, curPositon.y));
  const offsetX = curX - left;
  const offsetY = curY - top;
  style.width = offsetX;
  style.height = offsetY;
}

// 左下缩放
function calculateLeftBottom(style, curPositon, canvasStyle) {
  const { width, top, left } = style;
  //   鼠标的实时位置不能超出容器
  const curX = Math.max(0, curPositon.x);
  const curY = Math.max(0, Math.min(canvasStyle.height, curPositon.y));
  const offsetX = left - curX;
  const offsetY = curY - top;
  style.width = width + offsetX;
  style.height = offsetY;
  style.left = curX;
}

// 上缩放
function calculateTop(style, curPositon) {
  const { height, top } = style;
  if (curPositon.y < 0) return;
  const offsetY = top - curPositon.y;
  style.height = height + offsetY;
  style.top = curPositon.y;
}

// 右缩放
function calculateRight(style, curPositon, canvasStyle) {
  const { width } = canvasStyle;
  if (curPositon.x > width) return;
  const offsetX = curPositon.x - style.left;
  style.width = offsetX;
}

// 下缩放
function calculateBottom(style, curPositon, canvasStyle) {
  const { height } = canvasStyle;
  if (curPositon.y > height) return;
  style.height = curPositon.y - style.top;
}

// 左缩放
function calculateLeft(style, curPositon) {
  const { width, left } = style;
  if (curPositon.x < 0) return;
  const offsetX = left - curPositon.x;
  style.width = width + offsetX;
  style.left = curPositon.x;
}

/**
 * @description: 计算组件经过拖拽后的位置、长宽
 * @param {*} name：缩放点
 * @param {*} style：组件当前样式
 * @param {*} curPositon：鼠标实时位置
 * @param {*} canvasStyle：画布样式
 */
export default function calculateComponentPositonAndSize(
  name,
  style,
  curPositon,
  canvasStyle
) {
  funcs[name](style, curPositon, canvasStyle);
}
/**
 * @description: 组件拖拽
 * @param {*} style：组件当前样式
 * @param {*} curPositon：鼠标实时位置
 * @param {*} canvasStyle：画布样式
 */
export function calculateCenter(style, startStyle, offset, canvasStyle) {
  const { width, height } = canvasStyle;
  const left = offset.x + startStyle.left;
  const top = offset.y + startStyle.top;
  style.left = Math.max(0, Math.min(left, width - style.width));
  style.top = Math.max(0, Math.min(top, height - style.height));
}

/**
 * @description: 获取八个方向点的样式
 * @param {*} point：方向点
 * @param {*} style：组件样式
 */
export const getDirectionPointStyle = (point, style) => {
  const { width, height } = style;
  const hasT = /t/.test(point);
  const hasB = /b/.test(point);
  const hasL = /l/.test(point);
  const hasR = /r/.test(point);
  let newLeft = 0;
  let newTop = 0;

  // 四个角的点
  if (point.length === 2) {
    newLeft = hasL ? 0 : width;
    newTop = hasT ? 0 : height;
  } else {
    // 上下两点的点，宽度居中
    if (hasT || hasB) {
      newLeft = width / 2;
      newTop = hasT ? 0 : height;
    }

    // 左右两边的点，高度居中
    if (hasL || hasR) {
      newLeft = hasL ? 0 : width;
      newTop = Math.floor(height / 2);
    }
  }

  const _style = {
    marginLeft: '-4px',
    marginTop: '-4px',
    left: `${newLeft}px`,
    top: `${newTop}px`,
    cursor: CURSORS[point],
  };

  return _style;
};

