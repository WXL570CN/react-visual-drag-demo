// 拖拽组件类型
export const DRG_COM_TYPE = {
  // 文字块
  TEXT: 1,
  // 按钮
  BUTTON: 2,
  // 图片
  IMG: 3,
  // 表格
  TABLE: 4,
  // 线
  LINE: 5,
  // 三角形
  TRI: 6,
  // 矩形
  REC: 7,
  // 五角星
  STAR: 8,
  // 圆形
  CIRCLE: 9,
};

// 可供拖拽的组件
export const DRG_COM_LIST = [
  // 文字块
  {
    type: DRG_COM_TYPE.TEXT,
    icon: "icon-drag-text",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 按钮
  {
    type: DRG_COM_TYPE.BUTTON,
    icon: "icon-drag-button",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 图片
  {
    type: DRG_COM_TYPE.IMG,
    icon: "icon-drag-img",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 表格
  {
    type: DRG_COM_TYPE.TABLE,
    icon: "icon-drag-table",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 线
  {
    type: DRG_COM_TYPE.LINE,
    icon: "icon-drag-line",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 三角形
  {
    type: DRG_COM_TYPE.TRI,
    icon: "icon-drag-triangle",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 矩形
  {
    type: DRG_COM_TYPE.REC,
    icon: "icon-drag-rectangle",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 五角星
  {
    type: DRG_COM_TYPE.STAR,
    icon: "icon-drag-star",
    style: {
      width: 130,
      height: 28,
    },
  },
  // 圆形
  {
    type: DRG_COM_TYPE.CIRCLE,
    icon: "icon-drag-circle",
    style: {
      width: 130,
      height: 28,
    },
  },
  // ...
];
