import { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";
import Chart from "../chart";

export default function BarChartX({ data }) {
  const [sitePercentageList, setSitePercentageList] = useState([]);
  //I am getting the the right way to map sitePercentageList data in series so I am doing like that
  const [gp, setGp] = useState([]);
  const [bp, setBp] = useState([]);
  const [np, setNp] = useState([]);
  const [cnp, setCnp] = useState([]);

  const [siteChart, setSiteChart] = useState({
    xAxis: {
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
    yAxis: {
      axisLabel: {
        show: false,
      },
    },

    series: [
      {
        data: gp,
        type: "bar",
        stack: "x",
        color: "#373737",
        label: {
          show: true,
          position: "inside",
        },
      },
      {
        data: bp,
        type: "bar",
        stack: "x",
        color: "#AAAEC0",
        label: {
          show: true,
          position: "inside",
        },
      },
      {
        data: np,
        type: "bar",
        stack: "x",
        color: "#0F7DFF",
        label: {
          show: true,
          position: "inside",
        },
      },
      {
        data: cnp,
        type: "bar",
        stack: "x",
        color: "#00E209",
        label: {
          show: true,
          position: "inside",
        },
      },
    ],
  });

  useEffect(() => {
    if (sitePercentageList.length == 0) {
      filterDataSitesChart();
    }
  }, []);

  const filterDataSitesChart = () => {
    var totalSites = data.length;
    var filteredPerformance = [];
    data.forEach((item) => {
      if (filteredPerformance.indexOf(item.performance) === -1) {
        if (item.performance != "") {
          filteredPerformance.push(item.performance);
        }
      }
    });
    filteredPerformance.map((item) => {
      let sitesCount = 0;
      data.filter((S) => {
        if (S.performance === item) {
          sitesCount += 1;
        }
      });
      sitePercentageList.push(parseFloat((sitesCount / totalSites) * 100));
      //I am getting the the right way to map sitePercentageList data in series so I am doing like that

      if (item == "Good Performing") {
        gp.push(parseFloat((sitesCount / totalSites) * 100).toFixed(1));
      } else if (item == "Best Performing") {
        bp.push(parseFloat((sitesCount / totalSites) * 100).toFixed(1));
      } else if (item == "Non-Performing") {
        np.push(parseFloat((sitesCount / totalSites) * 100).toFixed(1));
      } else if (item == "Consistently Non-Performing") {
        cnp.push(parseFloat((sitesCount / totalSites) * 100).toFixed(1));
      }
    });
  };

  return (
    <>
      <Grid md={12}>
        <Typography id="spring-modal-title" variant="h6" component="h2">
          Site Count: {data.length}
        </Typography>
      </Grid>
      <Grid md={12} style={{ display: "flex", justifyContent: "center" }}>
        <Chart chartData={siteChart} height={"300px"} width={"800px"} />
      </Grid>
    </>
  );
}
