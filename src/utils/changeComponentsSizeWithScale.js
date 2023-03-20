import { cloneDeep } from "lodash";
import { divide, multiply } from "mathjs";

const needToChangeAttrs = ["top", "left", "width", "height", "fontSize"];
export default function changeComponentsSizeWithScale(
  scale,
  { realtimeList, canvasStyle }
) {
  const _realtimeList = cloneDeep(realtimeList);
  _realtimeList.forEach((component) => {
    Object.keys(component.style).forEach((key) => {
      if (needToChangeAttrs.includes(key)) {
        if (key === "fontSize" && component.style[key] === "") return;

        // 根据原来的比例获取样式原来的尺寸
        // 再用原来的尺寸 * 现在的比例得出新的尺寸
        component.style[key] = format(
          getOriginStyle(
            component.style[key],
            store.state.canvasStyleData.scale
          ),
          scale
        );
      }
    });
  });
  return {
    realtimeList: _realtimeList,
    canvasStyle: { ...canvasStyle, scale },
  };
}

const needToChangeAttrs2 = ["width", "height", "fontSize"];
// 组件、画布的缩放比例
export function changeComponentSizeWithScale(component, scale) {
  Object.keys(component.style).forEach((key) => {
    if (needToChangeAttrs2.includes(key)) {
      if (key === "fontSize" && component.style[key] === "") return;

      component.style[key] = format(component.style[key], scale);
    }
  });
}

function format(value, scale) {
  return multiply(value, divide(parseFloat(scale), 100));
}

function getOriginStyle(value, scale) {
  return divide(value, divide(parseFloat(scale), 100));
}
