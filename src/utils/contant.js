// 拖拽组件类型
export const DRAG_COM_TYPE = {
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
  // 图表
  CHART: 10,
};

// 可供拖拽的组件
export const DRAG_COM_LIST = [
  // 文字
  {
    type: DRAG_COM_TYPE.TEXT,
    icon: "icon-drag-text",
    label: "文字",
    style: {
      width: 200,
      height: 28,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
    },
  },
  // 按钮
  {
    type: DRAG_COM_TYPE.BUTTON,
    icon: "icon-drag-button",
    label: "按钮",
    style: {
      width: 100,
      height: 34,
      borderWidth: 1,
      borderColor: "",
      borderRadius: "",
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "",
      color: "",
      backgroundColor: "",
    },
  },
  // 图片
  {
    type: DRAG_COM_TYPE.IMG,
    icon: "icon-drag-img",
    label: "图片",
    style: {
      width: 300,
      height: 200,
      borderRadius: "",
    },
  },
  // 表格
  {
    type: DRAG_COM_TYPE.TABLE,
    icon: "icon-drag-table",
    label: "表格",
    style: {
      width: 600,
      height: 200,
      fontSize: "",
      fontWeight: 400,
      textAlign: "center",
      color: "",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
  // 图表
  {
    type: DRAG_COM_TYPE.CHART,
    icon: "icon-drag-chart",
    label: "图表",
    propValue: {
      chart: "VChart",
      option: {
        title: {
          text: "柱状图",
          show: true,
        },
        legend: {
          show: true,
        },
        tooltip: {
          show: true,
          trigger: "item",
        },
        xAxis: {
          show: true,
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: {
          type: "bar",
          name: "销量",
          data: [23, 61, 35, 77, 35],
          itemStyle: {
            barBorderRadius: 5,
            borderWidth: 1,
            borderType: "solid",
            borderColor: "#73c0de",
            shadowColor: "#5470c6",
            shadowBlur: 3,
          },
        },
      },
    },
    style: {
      width: 800,
      height: 500,
      borderRadius: "",
    },
  },
  // 线
  {
    type: DRAG_COM_TYPE.LINE,
    icon: "icon-drag-line",
    label: "线",
    style: {
      width: 200,
      height: 2,
      backgroundColor: "#000",
    },
  },
  // 三角形
  {
    type: DRAG_COM_TYPE.TRI,
    icon: "icon-drag-triangle",
    label: "三角形",
    style: {
      width: 80,
      height: 80,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "center",
      color: "",
      borderColor: "#000",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
  // 矩形
  {
    type: DRAG_COM_TYPE.REC,
    icon: "icon-drag-rectangle",
    label: "矩形",
    style: {
      width: 200,
      height: 200,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "center",
      color: "",
      borderColor: "#000",
      borderWidth: 1,
      backgroundColor: "",
      borderStyle: "solid",
      borderRadius: "",
      verticalAlign: "middle",
    },
  },
  // 五角星
  {
    type: DRAG_COM_TYPE.STAR,
    icon: "icon-drag-star",
    label: "五角星",
    style: {
      width: 80,
      height: 80,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "center",
      color: "",
      borderColor: "#000",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
  // 圆形
  {
    type: DRAG_COM_TYPE.CIRCLE,
    icon: "icon-drag-circle",
    label: "圆形",
    style: {
      width: 200,
      height: 200,
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      textAlign: "center",
      color: "",
      borderColor: "#000",
      borderWidth: 1,
      backgroundColor: "",
      borderStyle: "solid",
      borderRadius: "",
      verticalAlign: "middle",
    },
  },
  // ...
];
