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
  const _arr = deepCopy(arr)
  _arr[j] = _arr.splice(i, 1, _arr[j])[0];
  return _arr;
}
