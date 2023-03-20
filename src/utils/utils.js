import { cloneDeep, isArray, isEmpty, isObject, isString } from "lodash";
import { nanoid } from "nanoid";
import { CANVAS_STYLE } from "./contant";

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

/**
 * @description: 通过value获取对应常量中的匹配项（默认返回text）
 * @param {*} options：传入的常量格式
 * 格式一：[{ [name]: { value: '', text: '' } }]
 * 格式二：[{ value: '', text: '' }]
 * @param {*} value：要查找的value
 * @param {*} keyName：要返回的值对应的key
 * returnObj 为 true 时 keyName 无效
 * @param {*} returnObj：是否返回匹配上的对象
 */
export const getOptionsMatch = (options, value, extra = {}) => {
  const { keyName = 'text', valueName = 'value', returnObj = true } = extra || {}
  const _options = isArray(options) ? options : Object.values(options)
  const res = _options.find(item => `${item[valueName]}` === `${value}`) || {}
  if (returnObj) return res
  return res[keyName] || '--'
}

// 获取组件的适应画布后的宽高
export const getImgWideHighAfterAdaptive = (width, height) => {
  const scale = getScale(width, height, CANVAS_STYLE.width, CANVAS_STYLE.height)
  console.log('『scale』', scale)
  return {
    width: width * scale,
    height: height * scale
  }
}