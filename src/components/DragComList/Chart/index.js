import styles from "./index.less";
import * as echarts from "echarts";
import EChart from "echarts-for-react/lib/core";

const Chart = (props) => {
  const { propValue } = props;
  return (
    <div className={styles["chart"]}>
      <EChart
        echarts={echarts}
        option={propValue.option}
        notMerge
        lazyUpdate
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Chart;
