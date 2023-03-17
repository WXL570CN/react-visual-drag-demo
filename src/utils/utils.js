import { nanoid } from "nanoid";

// 主要用于 Vue 的 diff 算法，为每个元素创建一个独一无二的 ID
export default function generateID() {
  return nanoid();
}

// 深拷贝
export function deepCopy(target) {
  if (typeof target == "object") {
    const result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] == "object") {
        result[key] = deepCopy(target[key]);
      } else {
        result[key] = target[key];
      }
    }

    return result;
  }

  return target;
}

// 交换位置
export function swap(arr, i, j) {
  const _arr = deepCopy(arr);
  _arr[j] = _arr.splice(i, 1, _arr[j])[0];
  return _arr;
}

// 判断变量是否为对象
export const isObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

// 判断变量是否为数组
export const isArray = (value) => {
  const isArrayFn =
    Array.isArray ||
    ((arg) => Object.prototype.toString.call(arg) === "[object Array]");
  return isArrayFn(value);
};

// 判断是否为空
export const isEmpty = (value, checkSpace) => {
  if (value === null || value === undefined || value === "") return true;
  if (isObject(value)) return Object.keys(value).length === 0;
  if (isArray(value)) return value.length === 0;
  if (typeof value === "string" && checkSpace) {
    if (value.trim() === "") return true;
  }
  return false;
};

// 获取缩放比例
// 物体宽高：width, height
// 容奇宽高：boxWidth, boxHeight
export const getScale = (width, height, boxWidth, boxHeight) => {
  const scale = width / height
  const boxScale = boxWidth / boxHeight
  if (boxScale > scale) {
    return boxHeight / height
  }
  return boxWidth / width
}