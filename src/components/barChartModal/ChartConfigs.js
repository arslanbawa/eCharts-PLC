const BarChartTotalConfigs = {
  xAxis: {
    axisLabel: {
      show: false,
    },
  },
  yAxis: {
    type: "category",
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  color: ["#373737", "#AAAEC0", "#0F7DFF", "#00E209"],
  series: [
    {
      colorBy: "data",
      name: "Life Cost",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "inside",
      },
      // data: sumIndividualNar,
    },
  ],
};

export { BarChartTotalConfigs };
