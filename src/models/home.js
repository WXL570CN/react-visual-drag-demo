// 海图图层标注
import { useState } from "react";
import { swap } from "../utils/utils";

export default () => {
  const [curComponent, setCurCom] = useState(null); // 当前拖拽的组件
  const [realtimeList, setRealtimeList] = useState([]); // 当前被拖拽的组件

  const addRealtimeList = (dragItem) => {
    setRealtimeList((_realtimeList) => [..._realtimeList, dragItem]);
  };

  const moveUpComponent = (index) => {
    if (index === 0) {
      console.log('到顶了！')
      return
    }
    setRealtimeList((_realtimeList) => swap(_realtimeList, index, index - 1));
  };
  const moveDownComponent = (index) => {
    if (index === realtimeList.length - 1) {
      console.log('到底了！')
      return
    }
    setRealtimeList((_realtimeList) => swap(_realtimeList, index, index + 1));
  };

  const deleteComponent = (id) => {
    setRealtimeList((_realtimeList) =>
      _realtimeList.filter((item) => item.id !== id)
    );
  };

  return {
    curComponent,
    realtimeList,
    addRealtimeList,
    moveUpComponent,
    moveDownComponent,
    deleteComponent,
  };
};
