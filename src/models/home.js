// 海图图层标注
import { message } from "antd";
import { useEffect, useState } from "react";
import storage from "../utils/storage";
import { deepCopy, isEmpty, swap } from "../utils/utils";

export default () => {
  const [curComponent, setCurComonent] = useState(null); // 当前拖拽的组件
  const [realtimeList, setRealtimeList] = useState([]); // 当前被拖拽的组件
  const [isClickComponent, setIsClickComponent] = useState(false); // 鼠标在画布上的状态

  useEffect(() => {
    const dragData = storage.get("drag_data");
    if (isEmpty(dragData)) return;
    setRealtimeList(dragData);
  }, []);

  const addRealtimeList = (dragItem) => {
    setRealtimeList((_realtimeList) => [..._realtimeList, dragItem]);
  };

  const moveUpComponent = (index) => {
    if (index === 0) {
      message.warn("到顶了！");
      return;
    }
    setRealtimeList((_realtimeList) => swap(_realtimeList, index, index - 1));
  };
  const moveDownComponent = (index) => {
    if (index === realtimeList.length - 1) {
      message.warn("到底了！");
      return;
    }
    setRealtimeList((_realtimeList) => swap(_realtimeList, index, index + 1));
  };

  const deleteComponent = (id) => {
    setRealtimeList((_realtimeList) =>
      _realtimeList.filter((item) => item.id !== id)
    );
  };

  const updateCurComponent = (payload, element) => {
    const { top, left, width, height, rotate } = payload;
    const _curComponent = deepCopy(element);
    if (top) _curComponent.style.top = Math.round(top);
    if (left) _curComponent.style.left = Math.round(left);
    if (width) _curComponent.style.width = Math.round(width);
    if (height) _curComponent.style.height = Math.round(height);
    if (rotate) _curComponent.style.rotate = Math.round(rotate);
    const _realtimeList = deepCopy(realtimeList);
    const _index = _realtimeList.findIndex(
      (item) => item.id === _curComponent.id
    );
    _realtimeList.splice(_index, 1, _curComponent);
    setCurComonent(_curComponent);
    setRealtimeList(_realtimeList);
  };

  return {
    curComponent,
    realtimeList,
    isClickComponent,
    setCurComonent,
    setRealtimeList,
    setIsClickComponent,
    addRealtimeList,
    moveUpComponent,
    moveDownComponent,
    deleteComponent,
    updateCurComponent,
  };
};
