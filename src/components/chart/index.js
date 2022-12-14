import ReactEcharts from "echarts-for-react";

function Chart({ chartData, height, width }) {
  return (
    <ReactEcharts
      option={chartData}
      style={{ height: height, width: width }}
    ></ReactEcharts>
  );
}

export default Chart;
