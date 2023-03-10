// 海图图层标注
import { useState } from 'react';

export default () => {
  const [curComponent, setCurCom] = useState(null)  // 当前拖拽的组件
  const [realtimeList, setRealtimeList] = useState([])  // 当前被拖拽的组件

  const addRealtimeList = (dragItem) => {
    setRealtimeList((_realtimeList) => [..._realtimeList, dragItem])
  }

  return {
    curComponent,
    realtimeList,
    addRealtimeList
  };
};
