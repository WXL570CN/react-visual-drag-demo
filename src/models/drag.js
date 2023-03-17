import { cloneDeep } from 'lodash';
import { swap } from '../utils/utils';

export default {
  namespace: 'drag',
  state: {
    curComponent: null,
    realtimeList: [],
    isClickComponent: false,
  },
  reducers: {
    setCurComponent(state, { payload: curComponent }) {
      return { ...state, curComponent };
    },
    setRealtimeList(state, { payload: realtimeList }) {
      return { ...state, realtimeList };
    },
    setIsClickComponent(state, { payload: isClickComponent }) {
      return { ...state, isClickComponent };
    },
    addRealtimeList(state, { payload: curComponent  }) {
      return {
        ...state,
        realtimeList: [...state.realtimeList, curComponent]
      }
    },
    moveUpComponent(state, { payload: index }) {
      if (index === 0) {
        message.warn('到顶了！');
        return;
      }
      return {
        ...state,
        realtimeList: swap(state.realtimeList, index, index - 1),
      };
    },
    moveDownComponent(state, { payload: index }) {
      if (index === state.realtimeList.length - 1) {
        message.warn('到底了！');
        return;
      }
      return {
        ...state,
        realtimeList: swap(state.realtimeList, index, index + 1),
      };
    },
    deleteComponent(state, { payload: id }) {
      return {
        ...state,
        realtimeList: state.realtimeList.filter((item) => item.id !== id),
      };
    },
    updateCurComponent(state, { payload }) {
      const { top, left, width, height, rotate } = payload;
      const curComponent = cloneDeep(state.curComponent);
      const realtimeList = cloneDeep(state.realtimeList);
      if (top) curComponent.style.top = Math.round(top);
      if (left) curComponent.style.left = Math.round(left);
      if (width) curComponent.style.width = Math.round(width);
      if (height) curComponent.style.height = Math.round(height);
      if (rotate) curComponent.style.rotate = Math.round(rotate);
      const _index = realtimeList.findIndex(
        (item) => item.id === curComponent.id,
      );
      realtimeList.splice(_index, 1, curComponent);
      return { ...state, curComponent, realtimeList };
    },
  },
  effects: {},
};
