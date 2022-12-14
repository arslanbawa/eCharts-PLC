const PieChartConfigs = {
    legend: {
      orient: "vertical",
      left: 30,
      top: "center",
    },

    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 150],
        center: ["75%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: false,
          },
        },

        // data: chartRow,
      },
    ],
  } 

export default PieChartConfigs;