import { cloneDeep, isArray, isObject, isString } from "lodash";
import { nanoid } from "nanoid";

// 主要用于 Vue 的 diff 算法，为每个元素创建一个独一无二的 ID
export default function generateID() {
  return nanoid();
}

// 交换位置
export function swap(arr, i, j) {
  const _arr = cloneDeep(arr);
  _arr[j] = _arr.splice(i, 1, _arr[j])[0];
  return _arr;
}

// 获取缩放比例
// 物体宽高：width, height
// 容奇宽高：boxWidth, boxHeight
export const getScale = (width, height, boxWidth, boxHeight) => {
  const scale = width / height;
  const boxScale = boxWidth / boxHeight;
  if (boxScale > scale) {
    return boxHeight / height;
  }
  return boxWidth / width;
};
